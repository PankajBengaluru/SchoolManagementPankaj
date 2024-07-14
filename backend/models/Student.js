const mongoose = require('mongoose');

const studentSchema = new mongoose.Schema({
  name: { type: String, required: true },
  gender: { type: String, enum: ['Male', 'Female', 'Other'], required: true },
  dob: { type: Date },
  contactDetails: {
    email: { type: String, required: true },
    phone: { type: String }
  },
  feesPaid: { type: Number, required: true },
  class: { type: mongoose.Schema.Types.ObjectId, ref: 'Class' }
});

module.exports = mongoose.model('Student', studentSchema);
