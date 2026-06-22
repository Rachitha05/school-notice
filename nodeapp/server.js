const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 8080;

app.use(cors({
    origin: "https://your-frontend.onrender.com",
    credentials: true
  }));
app.use(express.json());

mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => console.log('✅ MongoDB Connected'))
.catch(err => console.error('❌ MongoDB Connection Error:', err));

const noticeRoutes = require('./routes/noticeRoutes');
app.use('/api', noticeRoutes);

app.listen(PORT, () => {
  console.log(`🚀 Server running on ${PORT}`);
});
