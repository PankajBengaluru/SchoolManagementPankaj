const express = require('express');
const router = express.Router();
const Student = require('../models/Student');

// Route to get all students
router.get('/students', async (req, res) => {
  try {
    const students = await Student.find();
    res.json(students);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Route to get a single student
router.get('/students/:id', getStudent, (req, res) => {
  res.json(res.student);
});

// Route to create a new student
router.post('/students', async (req, res) => {
  const student = new Student({
    name: req.body.name,
    gender: req.body.gender,
    dob: req.body.dob,
    contactDetails: req.body.contactDetails,
    feesPaid: req.body.feesPaid,
    class: req.body.class
  });

  try {
    const newStudent = await student.save();
    res.status(201).json(newStudent);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// Route to update a student
router.patch('/students/:id', getStudent, async (req, res) => {
  if (req.body.name != null) {
    res.student.name = req.body.name;
  }
  if (req.body.gender != null) {
    res.student.gender = req.body.gender;
  }
  if (req.body.dob != null) {
    res.student.dob = req.body.dob;
  }
  if (req.body.contactDetails != null) {
    res.student.contactDetails = req.body.contactDetails;
  }
  if (req.body.feesPaid != null) {
    res.student.feesPaid = req.body.feesPaid;
  }
  if (req.body.class != null) {
    res.student.class = req.body.class;
  }
  try {
    const updatedStudent = await res.student.save();
    res.json(updatedStudent);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// Route to delete a student
router.delete('/students/:id', getStudent, async (req, res) => {
  try {
    await res.student.remove();
    res.json({ message: 'Student deleted' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Middleware function to get student by ID
async function getStudent(req, res, next) {
  let student;
  try {
    student = await Student.findById(req.params.id);
    if (student == null) {
      return res.status(404).json({ message: 'Cannot find student' });
    }
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }

  res.student = student;
  next();
}

module.exports = router;
