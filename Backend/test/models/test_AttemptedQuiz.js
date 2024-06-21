const mongoose = require('mongoose');
const chai = require('chai');
const expect = chai.expect;
const AttemptedQuiz = require('../../models/AttemptedQuiz');

// Configure Mongoose to use the test database
mongoose.connect('mongodb://localhost:27017/test', { useNewUrlParser: true, useUnifiedTopology: true });

describe('AttemptedQuiz Model Test', () => {

  // Clear the database before each test
  beforeEach((done) => {
    mongoose.connection.collections.attemptedquizzes.drop(() => {
      done();
    });
  });

  it('should create an AttemptedQuiz model instance with default values', (done) => {
    const attemptedQuiz = new AttemptedQuiz({
      courseid: mongoose.Types.ObjectId(),
      quizid: mongoose.Types.ObjectId(),
      questionid: mongoose.Types.ObjectId(),
      studentid: mongoose.Types.ObjectId(),
      assignedmarks: '10'
    });

    attemptedQuiz.save((err, savedAttemptedQuiz) => {
      if (err) done(err);
      expect(savedAttemptedQuiz.courseid).to.exist;
      expect(savedAttemptedQuiz.quizid).to.exist;
      expect(savedAttemptedQuiz.questionid).to.exist;
      expect(savedAttemptedQuiz.studentid).to.exist;
      expect(savedAttemptedQuiz.assignedmarks).to.equal('10');
      expect(savedAttemptedQuiz.marksgot).to.be.undefined;
      expect(savedAttemptedQuiz.iscompleted).to.be.false;
      done();
    });
  });

  it('should fail when required fields are missing', (done) => {
    const attemptedQuiz = new AttemptedQuiz();

    attemptedQuiz.save((err) => {
      expect(err).to.exist;
      expect(err.errors.courseid).to.not.exist;  // courseid is not required
      expect(err.errors.quizid).to.not.exist;    // quizid is not required
      expect(err.errors.questionid).to.not.exist; // questionid is not required
      expect(err.errors.studentid).to.not.exist; // studentid is not required
      expect(err.errors.assignedmarks).to.exist;
      expect(err.errors.iscompleted).to.not.exist; // iscompleted has a default value
      done();
    });
  });

  // Add more tests as needed
});

// Close the Mongoose connection after all tests
after((done) => {
  mongoose.connection.close();
  done();
});
