const chai = require('chai');
const expect = chai.expect;
const sinon = require('sinon');
const mongoose = require('mongoose');
require('sinon-mongoose');

const Teacher = require('../models/Teacher');

describe('Teacher Model', () => {
    let TeacherMock;

    beforeEach(() => {
        TeacherMock = sinon.mock(new Teacher({
            name: 'Jane Smith',
            email: 'jane@example.com',
            age: 40,
            dp: 'imagepath',
            gender: 'Female',
            chatid: new mongoose.Types.ObjectId(),
            registrationnumber: '789123',
            password: 'password456'
        }));
    });

    afterEach(() => {
        TeacherMock.restore();
    });

    it('should create a new teacher', (done) => {
        const teacher = new Teacher({
            name: 'Jane Smith',
            email: 'jane@example.com',
            age: 40,
            dp: 'imagepath',
            gender: 'Female',
            chatid: new mongoose.Types.ObjectId(),
            registrationnumber: '789123',
            password: 'password456'
        });

        TeacherMock
            .expects('save')
            .yields(null);

        teacher.save((err) => {
            TeacherMock.verify();
            TeacherMock.restore();
            expect(err).to.be.null;
            done();
        });
    });

    it('should return an error if required fields are missing', (done) => {
        const teacher = new Teacher({});

        TeacherMock
            .expects('save')
            .yields(new Error('validation error'));

        teacher.save((err) => {
            TeacherMock.verify();
            TeacherMock.restore();
            expect(err).to.exist;
            expect(err.message).to.equal('validation error');
            done();
        });
    });

    it('should find a teacher by email', (done) => {
        TeacherMock
            .expects('findOne')
            .withArgs({ email: 'jane@example.com' })
            .yields(null, new Teacher({
                name: 'Jane Smith',
                email: 'jane@example.com',
                age: 40,
                dp: 'imagepath',
                gender: 'Female',
                chatid: new mongoose.Types.ObjectId(),
                registrationnumber: '789123',
                password: 'password456'
            }));

        Teacher.findOne({ email: 'jane@example.com' }, (err, teacher) => {
            TeacherMock.verify();
            TeacherMock.restore();
            expect(err).to.be.null;
            expect(teacher).to.exist;
            expect(teacher.email).to.equal('jane@example.com');
            done();
        });
    });
});
