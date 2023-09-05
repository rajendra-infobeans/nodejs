const mongoose = require('mongoose');

// Creating student table schema:
const studentSchema = mongoose.Schema({
    regno: Number,
    name:  String,
    grade: String,
    section: {
        type: String,
        default: 'A',
    }
});

const student = mongoose.model('student', studentSchema);

module.exports = student;
