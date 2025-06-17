const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');

dotenv.config(); // โหลดค่าจาก .env

const app = express();
app.use(cors());
app.use(express.json());

// เชื่อม MongoDB
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log('✅ MongoDB connected'))
.catch((err) => console.error('❌ MongoDB error:', err));

// เส้นทางชั่วคราว (ยังไม่ใส่ route จริง)
app.get('/', (req, res) => {
  res.send('API is running...');
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});

const workerRoutes = require('./routes/workerRoutes');
app.use('/api/workers', workerRoutes);
