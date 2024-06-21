const chai = require('chai');
const expect = chai.expect;
const sinon = require('sinon');
const mongoose = require('mongoose');
require('sinon-mongoose');

const EnrolledCourse = require('../models/EnrolledCourse');

describe('EnrolledCourse Model', () => {
    let EnrolledCourseMock;

    beforeEach(() => {
        EnrolledCourseMock = sinon.mock(new EnrolledCourse({
            key: 'testKey',
            enrolledby: new mongoose.Types.ObjectId(),
            courseid: new mongoose.Types.ObjectId(),
            date: '2023-06-21'
        }));
    });

    afterEach(() => {
        EnrolledCourseMock.restore();
    });

    it('should create a new enrolled course', (done) => {
        const enrolledCourse = new EnrolledCourse({
            key: 'testKey',
            enrolledby: new mongoose.Types.ObjectId(),
            courseid: new mongoose.Types.ObjectId(),
            date: '2023-06-21'
        });

        EnrolledCourseMock
            .expects('save')
            .yields(null);

        enrolledCourse.save((err) => {
            EnrolledCourseMock.verify();
            EnrolledCourseMock.restore();
            expect(err).to.be.null;
            done();
        });
    });

    it('should return an error if required fields are missing', (done) => {
        const enrolledCourse = new EnrolledCourse({});

        EnrolledCourseMock
            .expects('save')
            .yields(new Error('validation error'));

        enrolledCourse.save((err) => {
            EnrolledCourseMock.verify();
            EnrolledCourseMock.restore();
            expect(err).to.exist;
            expect(err.message).to.equal('validation error');
            done();
        });
    });

    it('should find an enrolled course by key', (done) => {
        EnrolledCourseMock
            .expects('findOne')
            .withArgs({ key: 'testKey' })
            .yields(null, new EnrolledCourse({
                key: 'testKey',
                enrolledby: new mongoose.Types.ObjectId(),
                courseid: new mongoose.Types.ObjectId(),
                date: '2023-06-21'
            }));

        EnrolledCourse.findOne({ key: 'testKey' }, (err, enrolledCourse) => {
            EnrolledCourseMock.verify();
            EnrolledCourseMock.restore();
            expect(err).to.be.null;
            expect(enrolledCourse).to.exist;
            expect(enrolledCourse.key).to.equal('testKey');
            done();
        });
    });
});
