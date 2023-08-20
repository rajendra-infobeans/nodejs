import express from 'express';

// Importing student controller functions.
import { getStudents, createStudent, deleteStudent } from '../controller/stduent.js';

const router = express.Router();

// getStudents is a callback function.
// GET Request
router.get('/', getStudents);

// POST request
router.post('/', createStudent);

// Delete request
router.delete('/:id', deleteStudent);

export default router;
