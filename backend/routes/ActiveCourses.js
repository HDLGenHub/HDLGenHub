const express = require('express');
const router = express.Router();
const Course = require('../models/ActiveCourse');

router.get('/courses', async (req, res) => {
    try {
        const courses = await Course.find();
        res.json(courses);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

router.get('/courses/:id', getCourse, (req, res) => {
    res.json(res.course);
});

router.post('/courses', async (req, res) => {
    const { title, description, instructor, materials, duration, enrollmentStatus } = req.body;
    

    const course = new Course({
        title,
        description,
        instructor,
        materials,
        duration,
        enrollmentStatus
    });

    try {
        const newCourse = await course.save();
        res.status(201).json(newCourse);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});

router.patch('/courses/:id', getCourse, async (req, res) => {
    const { title, description, instructor, materials, duration, enrollmentStatus } = req.body;

    if (title) {
        res.course.title = title;
    }
    if (description) {
        res.course.description = description;
    }
    if (instructor) {
        res.course.instructor = instructor;
    }
    if (materials) {
        res.course.materials = materials;
    }
    if (duration) {
        res.course.duration = duration;
    }
    if (enrollmentStatus) {
        res.course.enrollmentStatus = enrollmentStatus;
    }

    try {
        const updatedCourse = await res.course.save();
        res.json(updatedCourse);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});

router.delete('/courses/:id', getCourse, async (req, res) => {
    try {
        await res.course.remove();
        res.json({ message: 'Course deleted' });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

async function getCourse(req, res, next) {
    let course;
    try {
        course = await Course.findById(req.params.id);
        if (!course) {
            return res.status(404).json({ message: 'Course not found' });
        }
    } catch (err) {
        return res.status(500).json({ message: err.message });
    }

    res.course = course;
    next();
}

module.exports = router;
