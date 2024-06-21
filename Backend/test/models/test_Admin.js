const mongoose = require('mongoose');
const chai = require('chai');
const expect = chai.expect;
const Admin = require('../../models/Admin');

// Configure Mongoose to use the test database
mongoose.connect('mongodb://localhost:27017/test', { useNewUrlParser: true, useUnifiedTopology: true });

describe('Admin Model Test', () => {

  // Clear the database before each test
  beforeEach((done) => {
    mongoose.connection.collections.admins.drop(() => {
      done();
    });
  });

  it('should create an Admin model instance with default values', (done) => {
    const admin = new Admin({
      name: 'Admin Name',
      email: 'admin@example.com',
      about: 'About admin',
      password: 'password123'
    });

    admin.save((err, savedAdmin) => {
      if (err) done(err);
      expect(savedAdmin.name).to.equal('Admin Name');
      expect(savedAdmin.email).to.equal('admin@example.com');
      expect(savedAdmin.key).to.equal('12345678');
      expect(savedAdmin.encryptionkey).to.equal('12345678');
      expect(savedAdmin.about).to.equal('About admin');
      expect(savedAdmin.password).to.equal('password123');
      done();
    });
  });

  it('should fail when required fields are missing', (done) => {
    const admin = new Admin();

    admin.save((err) => {
      expect(err).to.exist;
      expect(err.errors.name).to.exist;
      expect(err.errors.email).to.exist;
      expect(err.errors.about).to.exist;
      expect(err.errors.password).to.exist;
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
