import OpenAI from "openai";

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

// Portfolio content extracted from resume
const portfolioContent = [
  {
    id: "exp-1",
    section: "Experience",
    title: "Mindful AI Framework Assistant",
    content: `Mindful AI Framework Assistant at WP Carey School of Business, Arizona State University (Jun 2025 – Present, Remote). 
    Developed an AI Risk Repository using the Mindful AI Framework, improving risk classification accuracy and expanding taxonomy coverage. 
    Conducted a study on LLM-based classification pipelines, benchmarking techniques such as Reflexion and hierarchical agents across multiple large language models to optimize performance and reliability. 
    Enhanced the MIT AI Risk Taxonomy classification process by labeling over 1,100 incidents, improving dataset consistency and achieving classification accuracy of up to 80%.`,
  },
  {
    id: "exp-2",
    section: "Experience",
    title: "Research Aide",
    content: `Research Aide at WP Carey School of Business, Arizona State University (Oct 2024 – Aug 2025, Tempe, AZ). 
    Engineered a Retrieval-Augmented Generation (RAG) system for academic course data, improving search efficiency by 40%. 
    Migrated LLM codebase from Google Colab to AWS SageMaker Studio, enhancing scalability and reproducibility. 
    Developed a multimodal trajectory prediction pipeline on the Waymo Open Dataset using Google Gemma-2-9B with LoRA fine-tuning; integrated image-to-text encoding, contextual prompts, and trajectory intent prediction, achieving a benchmark score of 7.36 (vs. 7.52 baseline).`,
  },
  {
    id: "project-1",
    section: "Projects",
    title: "Student Loan Repayment System",
    content: `Student Loan Repayment System (Oct 2025). 
    Cut manual data entry 90% by building an AI-assisted CSV importer with automated column mapping and a full-stack loan platform (React 19, FastAPI, MongoDB) featuring AI loan calculations and a real-time analytics dashboard. 
    Delivered a conversational AI chatbot with flow management and state-specific tax logic to personalize loan payoff projections and optimize employer-match strategies, helping employees save thousands in interest. 
    Hardened the stack with end-to-end encryption (in transit/at rest), PII masking, JWT auth, RBAC, and audit logging, reducing exposure risk for sensitive financial data. 
    Achieved sub-second p95 responses across admin and employee portals via async REST APIs, lazy-loaded React components, and optimized state management.`,
  },
  {
    id: "project-2",
    section: "Projects",
    title: "Face Recognition Edge Computing System",
    content: `Face Recognition Edge Computing System (Feb 2025 – Apr 2025). 
    Engineered an edge-based face recognition pipeline on AWS IoT Greengrass, achieving low-latency inference and reducing cloud-only dependency for real-time image processing. 
    Developed and deployed an MTCNN-based face detection component on EC2 Greengrass core; streamlined request throughput by 30% via SQS-based request–response queues integrated with AWS Lambda recognition services. 
    Configured IoT clients with secure certificates and MQTT messaging, ensuring 100% reliable delivery of live image streams between devices and cloud endpoints. 
    Validated system scalability and robustness using an autograder with workload generators, guaranteeing correctness across 100% of test cases and fault tolerance under parallel requests. 
    Optimized edge pipeline to handle No-Face cases locally, reducing unnecessary cloud requests by 15%.`,
  },
  {
    id: "project-3",
    section: "Projects",
    title: "Graph Processing & Streaming Analytics",
    content: `Graph Processing & Streaming Analytics (Sep 2024 – Nov 2024). 
    Designed and deployed a graph processing system on Neo4j using Docker containers, enabling efficient ingestion and querying of the NYC Yellow Cab dataset (20M+ trips). 
    Implemented PageRank and Breadth-First Search (BFS) algorithms using the Neo4j Graph Data Science library, identifying high-traffic locations and traversal paths in large-scale trip networks. 
    Built a streaming data pipeline with Kubernetes (Minikube) and Apache Kafka, orchestrating ingestion of trip data into Neo4j for near real-time analytics. 
    Automated deployment using Helm charts and YAML configurations, ensuring reproducibility, scalability, and fault tolerance in distributed environments. 
    Achieved a fully functional end-to-end pipeline (Kafka → Neo4j → Analytics) validated through grading scripts, reducing manual setup effort by >40%.`,
  },
  {
    id: "project-4",
    section: "Projects",
    title: "Extension of WebArena",
    content: `Extension of WebArena (Nov 2024 – Dec 2024). 
    Enhanced WebArena tasks by incorporating deontic logic and refining prompt structures to improve model performance in the environment. 
    Developed a dataset of 25 deontological tasks and evaluated them using WebArena LLMs. 
    Validated task complexity through assessments with ChatGPT. 
    Improved model reasoning capabilities in complex web-based environments through systematic prompt engineering and evaluation.`,
  },
  {
    id: "project-5",
    section: "Projects",
    title: "LLM-based Phishing Detection",
    content: `LLM-based Phishing Detection (Feb 2025 – Apr 2025). 
    Designed a multi-agent architecture utilizing the LLaMA-3.3-49B Nemotron model for real-time phishing website detection. 
    Implemented rule-based evaluation mechanisms to identify phishing indicators from webpage content and structure. 
    Built and deployed a browser extension integrated with the detection pipeline for end-user protection. 
    Led collaboration with peers to design evaluation strategies and effectively communicated results through presentations and documentation.`,
  },
  {
    id: "project-6",
    section: "Projects",
    title: "Evaluating Mathematical Reasoning of LLMs",
    content: `Evaluating Mathematical Reasoning of LLMs (Oct 2024 – Dec 2024). 
    Evaluated reasoning abilities of open-source instruction-tuned models (Llama-3.1-8B-instruct, Llama-3.2-3B, Gemma-2-9B-it, Mistral-7B-instruct) on the GSM8k dataset. 
    Designed a multi-agent framework and assessed performance across four dimensions: Accuracy, Correct Reasoning, Correct Answer, and Joint Correctness. 
    Demonstrated that multi-agent setups uncovered untapped reasoning ability, achieving up to 13% Correct Reasoning, even in cases where answers were incorrect. 
    Collaborated in a research group, contributing to methodology discussions and refining experiment design while practicing clear scientific communication.`,
  },
  {
    id: "project-7",
    section: "Projects",
    title: "Specialized Rich Text Document RAG for arXiv Papers",
    content: `Specialized Rich Text Document RAG for arXiv Papers (Oct 2024 – Dec 2024). 
    Built a Retrieval-Augmented Generation (RAG) system to process multimodal user queries over scientific papers. 
    Utilized AWS DynamoDB & S3 for storage and retrieval of scraped research papers. 
    Established a baseline method for handling complex scientific document structures and multimodal queries. 
    Implemented efficient retrieval mechanisms for large-scale scientific literature processing.`,
  },
  {
    id: "skills",
    section: "Skills",
    title: "Technical Skills",
    content: `Technical Skills: 
    Programming Languages: Python, C++, Java, SQL, Bash. 
    Frameworks & Libraries: Transformers, LangChain, Django, Bootstrap, React, Node.js. 
    Cloud & DevOps: AWS, GCP, Docker, Kubernetes, Helm, Anaconda. 
    Systems & Tools: Unix/Linux, Apache Kafka, Minikube, Node.js Runtime, MCP (Model Context Protocol). 
    Domains: Deep Learning, NLP, Generative AI, AI Agents, Graph Analytics, Edge Computing, APIs.`,
  },
  {
    id: "education",
    section: "Education",
    title: "Education",
    content: `Master of Computer Science, Arizona State University (Expected Dec 2025), CGPA: 4.0. 
    Relevant coursework: Software Verification Validation & Testing, Data Processing at Scale, Data Visualization.`,
  },
  {
    id: "about",
    section: "About",
    title: "About Sai Teja Alasyam",
    content: `Sai Teja Alasyam is a Master's student in Computer Science at Arizona State University with a perfect 4.0 GPA, specializing in AI/ML, deep learning, and cloud technologies. 
    Currently working as a Mindful AI Framework Assistant, passionate about building intelligent systems that solve real-world problems. 
    Expertise spans from developing RAG systems and multimodal AI pipelines to deploying scalable edge computing solutions on AWS. 
    Worked extensively with technologies like Kubernetes, Docker, Apache Kafka, and various machine learning frameworks including Transformers and LangChain. 
    Hands-on experience in full-stack development, cloud infrastructure, and AI research. 
    Particularly interested in generative AI, NLP, and building production-ready AI systems at scale. 
    Contact: saitejaalasyam@gmail.com, +1 (602) 576-7785, Tempe, AZ.`,
  },
];

interface SearchResult {
  id: string;
  title: string;
  excerpt: string;
  section: string;
  score: number;
}

export async function semanticSearch(query: string): Promise<SearchResult[]> {
  if (!query || query.trim().length === 0) {
    return [];
  }

  try {
    // Create embedding for the query
    const queryEmbeddingResponse = await openai.embeddings.create({
      model: "text-embedding-3-small",
      input: query,
    });

    const queryEmbedding = queryEmbeddingResponse.data[0].embedding;

    // Create embeddings for all portfolio content (in production, these would be cached)
    const contentEmbeddings = await Promise.all(
      portfolioContent.map(async (item) => {
        const response = await openai.embeddings.create({
          model: "text-embedding-3-small",
          input: item.content,
        });
        return {
          ...item,
          embedding: response.data[0].embedding,
        };
      })
    );

    // Calculate cosine similarity
    const results = contentEmbeddings.map((item) => {
      const similarity = cosineSimilarity(queryEmbedding, item.embedding);
      return {
        id: item.id,
        title: item.title,
        excerpt: item.content.substring(0, 200) + "...",
        section: item.section,
        score: similarity,
      };
    });

    // Sort by similarity and return top results
    return results.sort((a, b) => b.score - a.score).slice(0, 5);
  } catch (error) {
    console.error("Semantic search error:", error);
    throw error;
  }
}

function cosineSimilarity(a: number[], b: number[]): number {
  if (a.length !== b.length) {
    throw new Error("Vectors must have the same length");
  }

  let dotProduct = 0;
  let normA = 0;
  let normB = 0;

  for (let i = 0; i < a.length; i++) {
    dotProduct += a[i] * b[i];
    normA += a[i] * a[i];
    normB += b[i] * b[i];
  }

  return dotProduct / (Math.sqrt(normA) * Math.sqrt(normB));
}
