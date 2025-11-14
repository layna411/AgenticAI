<img width="1024" height="1536" alt="ChatGPT Image Nov 14, 2025, 01_59_23 PM" src="https://github.com/user-attachments/assets/8cce436d-d0ac-4dc3-8588-583275e248ba" />📘 Smart LMS – Agentic Learning Management System

An AI-powered LMS that uses multiple autonomous AI agents to improve learning with automated summaries, quizzes, mentoring suggestions, and progress tracking.

Built using:

Frontend: React + Vite

Backend: Node.js + Express

AI Models: Groq LLaMA 3 (free & fast)

Database: MongoDB Atlas

File Processing: Multer + PDF Parser

🚀 Features
🔹 1. Tutor Agent

Upload any PDF

Extracts text

Generates clean summaries

Answers questions from inside the PDF

🔹 2. Quiz Agent

Creates AI-generated MCQs on any topic

Includes explanations & correct answers

🔹 3. Mentor Agent

Creates 6-week personalized learning plans

Suggests resources, tasks, and study path

🔹 4. Progress Agent

Saves user progress in MongoDB

Tracks topics learned and quiz scores

Displays structured progress data



🔧 Backend Setup
1️⃣ Install Dependencies
cd Backend
npm install

2️⃣ Add .env File
PORT=5000
GROQ_API_KEY=your_groq_key
MONGO_URL=your_mongo_connection_string

3️⃣ Run Backend
npm run dev


Backend will start at:

http://localhost:5000

🎨 Frontend Setup
1️⃣ Install Dependencies
cd Frontend
npm install

2️⃣ Run Frontend
npm run dev


Vite will run your frontend at:

http://localhost:5173

🧪 API Endpoints
📌 Tutor Agent
Method	Endpoint	Description
POST	/api/tutor/summary	Upload PDF + summarize
POST	/api/tutor/ask	Ask question from PDF
📌 Quiz Agent
Method	Endpoint	Description
POST	/api/quiz/generate	Generate MCQ quiz
📌 Mentor Agent
Method	Endpoint	Description
POST	/api/mentor/suggest	Generate learning plan
📌 Progress Agent
Method	Endpoint	Description
GET	/api/progress/user/:id	Get user progress
POST	/api/progress/update	Update progress
🧠 AI Models Used

The project uses Groq's LLaMA 3 models:

llama-3.1-8b-instant → Summary, Quiz, Learning path

Fast, free, and excellent for educational use

🛡 Security

Private keys stored in .env

CORS configured for frontend access

MongoDB credentials encoded

File uploads stored securely

🎯 Future Enhancements (Roadmap)

🔐 JWT-based login & user accounts

🌐 Multi-user tracking

🎛 Admin dashboard

📊 Graph-based progress analytics

📝 Save quiz results to DB

📚 Store PDF summaries permanently

💡 Why This Project is Powerful

Combines AI + LMS

Fully functional end-to-end system

Real-world architecture (Frontend + Backend + DB + AI)

Great for final-year projects & professional portfolio

Expandable into a full SaaS product

👨‍💻 Author

Layna S

Smart LMS built with ❤️ using AI agents.
 
