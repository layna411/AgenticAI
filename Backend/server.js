require('dotenv').config();
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

// Import Routes
const tutorRoutes = require('./routes/tutor');
const quizRoutes = require('./routes/quiz');
const progressRoutes = require('./routes/progress');
const mentorRoutes = require('./routes/mentor');

const app = express();

/* 
===========================================
 CONNECT TO MONGODB
===========================================
*/
mongoose.connect(process.env.MONGO_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => console.log("✓ MongoDB connected successfully"))
.catch((err) => console.log("✗ MongoDB connection error ->", err));

/* 
===========================================
 CORS SETUP
===========================================
*/
app.use(cors({
  origin: [
    'http://localhost:5175',
    'http://localhost:5173',
    'http://127.0.0.1:5173',
    'http://localhost:3000'
  ],
  credentials: true
}));

/* 
===========================================
 MIDDLEWARES
===========================================
*/
app.use(bodyParser.json({ limit: '10mb' }));
app.use(bodyParser.urlencoded({ extended: true }));
app.use('/uploads', express.static('uploads'));

/* 
===========================================
 ROUTES
===========================================
*/
app.use('/api/tutor', tutorRoutes);
app.use('/api/quiz', quizRoutes);
app.use('/api/progress', progressRoutes);
app.use('/api/mentor', mentorRoutes);

/* 
===========================================
 START SERVER
===========================================
*/
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => 
  console.log(`✓ Backend running on http://localhost:${PORT}`)
);
