const express = require('express');

// Importing student controller functions.
const { getStudents, createStudent, deleteStudent } = require('../controller/stduent.js');

const router = express.Router();

// GET Request
router.get('/', getStudents);

// POST request
router.post('/', createStudent);

// Delete request
router.delete('/:id', deleteStudent);

module.exports = router;
