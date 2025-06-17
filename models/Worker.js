const mongoose = require('mongoose');

const WorkerSchema = new mongoose.Schema({
  name: { type: String, required: true },
  age: Number,
  position: String,
  experience: String,
});

module.exports = mongoose.model('Worker', WorkerSchema);
