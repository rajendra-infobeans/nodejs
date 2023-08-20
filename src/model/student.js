import mongoose from 'mongoose';

// Creating student table schema:
const stduentSchema = mongoose.Schema({
    regno: Number,
    name:  String,
    grade: String,
    section: {
        type: String,
        default: 'A',
    }
});

const student = mongoose.model('student', stduentSchema);

export default student;