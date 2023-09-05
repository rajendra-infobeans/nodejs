const student = require('../model/student.js');

exports.getStudents = async (req, res) => {
  try {
    const allStudents = await student.find();
    res.status(200).json(allStudents);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.createStudent = async (req, res) => {
  const studentData = req.body;
  const newStudent = new student(studentData);
  try {
    await newStudent.save();
    res.status(201).json(newStudent);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

exports.deleteStudent = async (req, res) => {
  const id = req.params.id;
  const user = await student.findByIdAndDelete(id);
  if (!user) {
    return res.status(400).json("User not found");
  }
  res.status(200).json("User deleted successfully");
};
