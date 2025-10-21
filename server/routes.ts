import type { Express } from "express";
import { createServer, type Server } from "http";
import { WebSocketServer, WebSocket } from "ws";
import { storage } from "./storage";
import { insertAppointmentSchema, insertChatMessageSchema } from "@shared/schema";
import { semanticSearch } from "./rag";

export async function registerRoutes(app: Express): Promise<Server> {
  // Appointment endpoints
  app.post("/api/appointments", async (req, res) => {
    try {
      const validatedData = insertAppointmentSchema.parse(req.body);
      const appointment = await storage.createAppointment(validatedData);
      res.json(appointment);
    } catch (error: any) {
      res.status(400).json({ error: error.message });
    }
  });

  app.get("/api/appointments", async (req, res) => {
    try {
      const appointments = await storage.getAppointments();
      res.json(appointments);
    } catch (error: any) {
      res.status(500).json({ error: error.message });
    }
  });

  app.get("/api/appointments/:id", async (req, res) => {
    try {
      const appointment = await storage.getAppointment(req.params.id);
      if (!appointment) {
        return res.status(404).json({ error: "Appointment not found" });
      }
      res.json(appointment);
    } catch (error: any) {
      res.status(500).json({ error: error.message });
    }
  });

  // Chat messages endpoint
  app.get("/api/chat/messages", async (req, res) => {
    try {
      const messages = await storage.getChatMessages();
      res.json(messages);
    } catch (error: any) {
      res.status(500).json({ error: error.message });
    }
  });

  // RAG search endpoint
  app.post("/api/search", async (req, res) => {
    try {
      const { query } = req.body;
      if (!query || typeof query !== "string") {
        return res.status(400).json({ error: "Query is required" });
      }

      const results = await semanticSearch(query);
      res.json(results);
    } catch (error: any) {
      console.error("Search error:", error);
      res.status(500).json({ error: "Search failed" });
    }
  });

  const httpServer = createServer(app);

  // WebSocket server for real-time chat
  const wss = new WebSocketServer({ server: httpServer, path: "/ws" });

  wss.on("connection", (ws: WebSocket) => {
    console.log("Client connected to chat");

    // Send existing messages when client connects
    storage.getChatMessages().then((messages) => {
      ws.send(JSON.stringify({ type: "history", messages }));
    });

    ws.on("message", async (data: Buffer) => {
      try {
        const parsed = JSON.parse(data.toString());
        
        if (parsed.type === "chat_message") {
          const validatedMessage = insertChatMessageSchema.parse({
            text: parsed.text,
            sender: parsed.sender,
          });

          const savedMessage = await storage.createChatMessage(validatedMessage);

          // Broadcast to all connected clients
          wss.clients.forEach((client) => {
            if (client.readyState === WebSocket.OPEN) {
              client.send(JSON.stringify({ type: "new_message", message: savedMessage }));
            }
          });
        }
      } catch (error) {
        console.error("WebSocket message error:", error);
        ws.send(JSON.stringify({ type: "error", error: "Invalid message format" }));
      }
    });

    ws.on("close", () => {
      console.log("Client disconnected from chat");
    });
  });

  return httpServer;
}
