const Teacher = require('../models/Teacher');

const getAllTeachers = async (req, res) => {
    try {
        const teachers = await Teacher.find();
        res.json(teachers);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

const createTeacher = async (req, res) => {
    const { name, gender, dob, contactDetails, salary, assignedClass } = req.body;

    try {
        const newTeacher = new Teacher({
            name,
            gender,
            dob,
            contactDetails,
            salary,
            assignedClass
        });

        const savedTeacher = await newTeacher.save();
        res.status(201).json(savedTeacher);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

const getTeacherById = async (req, res) => {
    try {
        const foundTeacher = await Teacher.findById(req.params.id);
        if (!foundTeacher) return res.status(404).json({ message: 'Teacher not found' });
        res.json(foundTeacher);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

const updateTeacher = async (req, res) => {
    try {
        const updatedTeacher = await Teacher.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!updatedTeacher) return res.status(404).json({ message: 'Teacher not found' });
        res.json(updatedTeacher);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

const deleteTeacher = async (req, res) => {
    try {
        const deletedTeacher = await Teacher.findByIdAndDelete(req.params.id);
        if (!deletedTeacher) return res.status(404).json({ message: 'Teacher not found' });
        res.json({ message: 'Teacher deleted' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

module.exports = {
    getAllTeachers,
    createTeacher,
    getTeacherById,
    updateTeacher,
    deleteTeacher
};
