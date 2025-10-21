# Portfolio Website - AI/ML Engineer

## Overview

This is a personal portfolio website for Sai Teja Alasyam, an AI/ML Engineer and Software Developer. The application showcases professional experience, projects, skills, and provides interactive features including appointment booking, real-time chat support, and semantic search capabilities powered by AI.

The website serves as both a professional showcase and a demonstration of full-stack development capabilities, featuring a modern React frontend with shadcn/ui components, an Express backend with WebSocket support, and RAG-based semantic search using OpenAI.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture

**Framework & Build System:**
- React 18+ with TypeScript for type-safe component development
- Vite as the build tool and development server for fast hot module replacement
- Wouter for lightweight client-side routing (replaces React Router)

**UI Component Strategy:**
- shadcn/ui component library built on Radix UI primitives for accessible, customizable components
- Tailwind CSS with custom design tokens following a "Technical Professional Hybrid" aesthetic
- Dark mode as primary theme with light mode support via context-based theme provider
- Custom CSS variables system for consistent color palette and elevation effects

**Design System:**
- Color palette optimized for dark mode (primary: deep slate backgrounds, vibrant purple accents)
- Typography using Inter for body/UI, JetBrains Mono for code
- Component styling follows Linear's minimalist professionalism with Material Design interactive patterns
- Custom elevation system (`hover-elevate`, `active-elevate-2`) for subtle depth effects

**State Management:**
- TanStack Query (React Query) for server state management and caching
- React hooks and context for local UI state (theme, modals, forms)
- Custom query client with aggressive caching strategy (`staleTime: Infinity`)

**Key Features:**
- Semantic search modal for portfolio content discovery
- Appointment booking system with calendar integration
- Real-time chat widget with WebSocket connection
- Responsive navigation with mobile menu support
- Form validation using react-hook-form with Zod schemas

### Backend Architecture

**Server Framework:**
- Express.js with TypeScript for HTTP server
- Native Node.js HTTP server upgraded with WebSocket support (ws library)
- Development-only Vite middleware for SSR and HMR

**API Design:**
- RESTful endpoints for CRUD operations on appointments and chat messages
- `/api/appointments` - Create and retrieve appointment bookings
- `/api/chat/messages` - Retrieve chat message history
- `/api/search` - POST endpoint for semantic search queries
- WebSocket endpoint at `/ws` for real-time bidirectional chat communication

**Session & Request Handling:**
- JSON body parsing with express.json() middleware
- Request logging middleware capturing method, path, status, duration, and response preview
- Error handling middleware with status code normalization

**RAG System (Retrieval-Augmented Generation):**
- OpenAI API integration for semantic search over portfolio content
- Pre-indexed portfolio content including experience, projects, and skills
- Content organized by sections (Experience, Projects, Skills, Education, About)
- Semantic search returns ranked results with excerpts and relevance scores

**Build & Deployment:**
- Development: tsx for TypeScript execution with hot reload
- Production: esbuild bundles server code, Vite builds client assets
- Static assets served from `dist/public` in production

### Data Storage Solutions

**In-Memory Storage (Current Implementation):**
- `MemStorage` class implementing `IStorage` interface
- Map-based storage for users, appointments, and chat messages
- UUID generation for entity IDs using Node.js crypto module
- No persistence - data resets on server restart (appropriate for demo/portfolio site)

**Database Schema (Drizzle ORM Ready):**
- PostgreSQL schema defined using Drizzle ORM
- Tables: `users`, `appointments`, `chat_messages`
- Zod schemas for runtime validation via drizzle-zod
- Neon serverless PostgreSQL client configured but storage layer not yet connected
- Migration system configured with drizzle-kit

**Data Models:**
- User: id, username, password
- Appointment: id, name, email, phone, date, time, purpose, createdAt
- ChatMessage: id, text, sender, createdAt

### Authentication & Authorization

**Current State:**
- User schema defined but authentication not implemented
- No session management or JWT tokens in active use
- All endpoints currently public/unauthenticated
- Infrastructure ready for future auth implementation (connect-pg-simple for sessions)

### External Dependencies

**AI/ML Services:**
- OpenAI API - Powers semantic search functionality over portfolio content
- Environment variable: `OPENAI_API_KEY`

**Database:**
- Neon Serverless PostgreSQL (configured but not actively used)
- Environment variable: `DATABASE_URL`
- Uses `@neondatabase/serverless` driver for edge-compatible connections

**UI Component Libraries:**
- Radix UI - Headless accessible component primitives (~20 component packages)
- Embla Carousel - Touch-enabled carousel component
- cmdk - Command menu/palette component
- Lucide React - Icon library
- React Icons (simple-icons) - Brand/tech logos

**Development Tools:**
- Replit-specific plugins for error overlay, cartographer, and dev banner (development only)
- Google Fonts CDN for typography (Inter, Cal Sans, JetBrains Mono, DM Sans, Fira Code)

**Styling & Form Libraries:**
- Tailwind CSS with PostCSS and Autoprefixer
- class-variance-authority - Type-safe variant styling utility
- clsx & tailwind-merge - Conditional class name composition
- react-hook-form - Form state management
- Zod - Schema validation and type inference
- date-fns - Date manipulation utilities

**WebSocket Communication:**
- ws library for WebSocket server implementation
- Browser-native WebSocket API on client
- Real-time bidirectional messaging for chat feature