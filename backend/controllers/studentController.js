const Student = require('../models/Student');

const getAllStudents = async (req, res) => {
    try {
        const students = await Student.find();
        res.json(students);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

const createStudent = async (req, res) => {
    const { name, gender, dob, contactDetails, feesPaid, classId } = req.body;

    try {
        const newStudent = new Student({
            name,
            gender,
            dob,
            contactDetails,
            feesPaid,
            class: classId
        });

        const savedStudent = await newStudent.save();
        res.status(201).json(savedStudent);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

const getStudentById = async (req, res) => {
    try {
        const foundStudent = await Student.findById(req.params.id);
        if (!foundStudent) return res.status(404).json({ message: 'Student not found' });
        res.json(foundStudent);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

const updateStudent = async (req, res) => {
    try {
        const updatedStudent = await Student.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!updatedStudent) return res.status(404).json({ message: 'Student not found' });
        res.json(updatedStudent);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

const deleteStudent = async (req, res) => {
    try {
        const deletedStudent = await Student.findByIdAndDelete(req.params.id);
        if (!deletedStudent) return res.status(404).json({ message: 'Student not found' });
        res.json({ message: 'Student deleted' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

module.exports = {
    getAllStudents,
    createStudent,
    getStudentById,
    updateStudent,
    deleteStudent
};
