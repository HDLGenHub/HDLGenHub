const chai = require('chai');
const expect = chai.expect;
const sinon = require('sinon');
const mongoose = require('mongoose');
require('sinon-mongoose');

const Student = require('../models/Student');

describe('Student Model', () => {
    let StudentMock;

    beforeEach(() => {
        StudentMock = sinon.mock(new Student({
            name: 'John Doe',
            email: 'john@example.com',
            registrationnumber: '123456',
            age: 25,
            dp: 'imagepath',
            gender: 'Male',
            chatid: new mongoose.Types.ObjectId(),
            password: 'password123'
        }));
    });

    afterEach(() => {
        StudentMock.restore();
    });

    it('should create a new student', (done) => {
        const student = new Student({
            name: 'John Doe',
            email: 'john@example.com',
            registrationnumber: '123456',
            age: 25,
            dp: 'imagepath',
            gender: 'Male',
            chatid: new mongoose.Types.ObjectId(),
            password: 'password123'
        });

        StudentMock
            .expects('save')
            .yields(null);

        student.save((err) => {
            StudentMock.verify();
            StudentMock.restore();
            expect(err).to.be.null;
            done();
        });
    });

    it('should return an error if required fields are missing', (done) => {
        const student = new Student({});

        StudentMock
            .expects('save')
            .yields(new Error('validation error'));

        student.save((err) => {
            StudentMock.verify();
            StudentMock.restore();
            expect(err).to.exist;
            expect(err.message).to.equal('validation error');
            done();
        });
    });

    it('should find a student by email', (done) => {
        StudentMock
            .expects('findOne')
            .withArgs({ email: 'john@example.com' })
            .yields(null, new Student({
                name: 'John Doe',
                email: 'john@example.com',
                registrationnumber: '123456',
                age: 25,
                dp: 'imagepath',
                gender: 'Male',
                chatid: new mongoose.Types.ObjectId(),
                password: 'password123'
            }));

        Student.findOne({ email: 'john@example.com' }, (err, student) => {
            StudentMock.verify();
            StudentMock.restore();
            expect(err).to.be.null;
            expect(student).to.exist;
            expect(student.email).to.equal('john@example.com');
            done();
        });
    });
});
