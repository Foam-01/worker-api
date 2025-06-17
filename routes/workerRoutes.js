const express = require('express');
const router = express.Router();
const Worker = require('../models/Worker');

// GET: ดึงข้อมูลคนงานทั้งหมด
router.get('/', async (req, res) => {
  const workers = await Worker.find();
  res.json(workers);
});

// POST: เพิ่มข้อมูลคนงานใหม่
router.post('/', async (req, res) => {
  const newWorker = new Worker(req.body);
  await newWorker.save();
  res.json({ message: '✅ Worker added' });
});

// PUT: แก้ไขข้อมูลคนงาน
router.put('/:id', async (req, res) => {
  await Worker.findByIdAndUpdate(req.params.id, req.body);
  res.json({ message: '✏️ Worker updated' });
});

// DELETE: ลบข้อมูลคนงาน
router.delete('/:id', async (req, res) => {
  await Worker.findByIdAndDelete(req.params.id);
  res.json({ message: '❌ Worker deleted' });
});

module.exports = router;
