import student from '../model/student.js';

export const getStudents =  async (req, res) => {
    // res.send('Router is working : in controller');
    try {
        const allstudent = await student.find();
        res.status(200).json(allstudent);
    } catch (error) {
        res.status(500).json({'message': error.message});
    }
};

export const createStudent = async (req, res) => {
    const studentData = req.body;
    const newStudent = new student(studentData);
    try {
        await newStudent.save();
        res.status(201).json(newStudent);
    } catch (error) {
        res.status(404).json({'message': error.message})
    }
    
    // res.send('Router is working for post request');
}

export const deleteStudent = async (req, res) => {
    const id = req.params.id;
    const user = await student.findByIdAndDelete(id);
    if (!user) {
      return res.status(400).json("User not found");
    }
    res.status(200).json("User deleted successfully");
    
}