const Class = require('../models/Class');

exports.getAllClasses = async (req, res) => {
  try {
    const classes = await Class.find().populate('teacher').populate('studentList');
    res.json(classes);
  } catch (err) {
    console.error('Error fetching classes:', err);
    res.status(500).json({ message: 'Server error' });
  }
};

exports.createClass = async (req, res) => {
  try {
    const newClass = new Class(req.body);
    await newClass.save();
    res.status(201).json(newClass);
  } catch (err) {
    console.error('Error creating class:', err);
    res.status(500).json({ message: 'Server error' });
  }
};

// Implement other CRUD operations as needed
