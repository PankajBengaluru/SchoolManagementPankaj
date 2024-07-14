const express = require('express');
const router = express.Router();
const Teacher = require('../models/Teacher');

// Route to get all teachers
router.get('/teachers', async (req, res) => {
  try {
    const teachers = await Teacher.find();
    res.json(teachers);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Route to get a single teacher
router.get('/teachers/:id', getTeacher, (req, res) => {
  res.json(res.teacher);
});

// Route to create a new teacher
router.post('/teachers', async (req, res) => {
  const teacher = new Teacher({
    name: req.body.name,
    gender: req.body.gender,
    dob: req.body.dob,
    contactDetails: req.body.contactDetails,
    salary: req.body.salary,
    assignedClass: req.body.assignedClass
  });

  try {
    const newTeacher = await teacher.save();
    res.status(201).json(newTeacher);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// Route to update a teacher
router.patch('/teachers/:id', getTeacher, async (req, res) => {
  if (req.body.name != null) {
    res.teacher.name = req.body.name;
  }
  if (req.body.gender != null) {
    res.teacher.gender = req.body.gender;
  }
  if (req.body.dob != null) {
    res.teacher.dob = req.body.dob;
  }
  if (req.body.contactDetails != null) {
    res.teacher.contactDetails = req.body.contactDetails;
  }
  if (req.body.salary != null) {
    res.teacher.salary = req.body.salary;
  }
  if (req.body.assignedClass != null) {
    res.teacher.assignedClass = req.body.assignedClass;
  }
  try {
    const updatedTeacher = await res.teacher.save();
    res.json(updatedTeacher);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// Route to delete a teacher
router.delete('/teachers/:id', getTeacher, async (req, res) => {
  try {
    await res.teacher.remove();
    res.json({ message: 'Teacher deleted' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Middleware function to get teacher by ID
async function getTeacher(req, res, next) {
  let teacher;
  try {
    teacher = await Teacher.findById(req.params.id);
    if (teacher == null) {
      return res.status(404).json({ message: 'Cannot find teacher' });
    }
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }

  res.teacher = teacher;
  next();
}

module.exports = router;
