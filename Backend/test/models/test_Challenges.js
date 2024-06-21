const mongoose = require('mongoose');
const chai = require('chai');
const expect = chai.expect;
const Challenges = require('../../models/Challenges');

// Configure Mongoose to use the test database
mongoose.connect('mongodb://localhost:27017/test', { useNewUrlParser: true, useUnifiedTopology: true });

describe('Challenges Model Test', () => {

  // Clear the database before each test
  beforeEach((done) => {
    mongoose.connection.collections.challenges.drop(() => {
      done();
    });
  });

  it('should create a Challenges model instance with required fields', (done) => {
    const challenge = new Challenges({
      name: 'Sample Challenge',
      problem: 'Sample Problem Description',
      private: true
    });

    challenge.save((err, savedChallenge) => {
      if (err) done(err);
      expect(savedChallenge.name).to.equal('Sample Challenge');
      expect(savedChallenge.problem).to.equal('Sample Problem Description');
      expect(savedChallenge.private).to.be.true;
      done();
    });
  });

  it('should fail when required fields are missing', (done) => {
    const challenge = new Challenges();

    challenge.save((err) => {
      expect(err).to.exist;
      expect(err.errors.name).to.exist;
      expect(err.errors.problem).to.exist;
      expect(err.errors.private).to.exist;
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
