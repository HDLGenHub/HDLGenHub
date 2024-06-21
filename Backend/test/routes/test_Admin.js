const chai = require('chai');
const expect = chai.expect;
const sinon = require('sinon');
const mongoose = require('mongoose');
const supertest = require('supertest');
const express = require('express');

// Import the admin routes
const adminRoutes = require('../routes/admin');

// Import the Admin model
const Admin = require('../models/Admin');

const app = express();
app.use(express.json());
app.use('/admin', adminRoutes);

describe('Admin Routes', () => {
    let server;
    let sandbox;

    before((done) => {
        server = app.listen(3000, done);
    });

    after((done) => {
        server.close(done);
    });

    beforeEach(() => {
        sandbox = sinon.createSandbox();
    });

    afterEach(() => {
        sandbox.restore();
    });

    describe('GET /admin', () => {
        it('should return all admins', (done) => {
            const mockAdmins = [
                { name: 'Admin1', email: 'dondulshan@gmail' },
                { name: 'Admin2', email: 'admin2@example.com' },
            ];

            sandbox.stub(Admin, 'find').resolves(mockAdmins);

            supertest(app)
                .get('/admin')
                .expect(200)
                .end((err, res) => {
                    if (err) return done(err);
                    expect(res.body).to.deep.equal(mockAdmins);
                    done();
                });
        });
    });

    describe('GET /admin/:id', () => {
        it('should return a single admin', (done) => {
            const mockAdmin = { name: 'Admin1', email: 'dondulshan@gmail' };
            sandbox.stub(Admin, 'findById').resolves(mockAdmin);

            supertest(app)
                .get('/admin/12345')
                .expect(200)
                .end((err, res) => {
                    if (err) return done(err);
                    expect(res.body).to.deep.equal(mockAdmin);
                    done();
                });
        });
    });

    describe('POST /admin', () => {
        it('should create a new admin', (done) => {
            const newAdmin = {
                name: 'Admin1',
                key: 'key123',
                email: 'dondulshan.com',
                encryptionkey: 'encKey',
                about: 'About Admin',
                password: 'password'
            };

            sandbox.stub(Admin.prototype, 'save').resolves(newAdmin);

            supertest(app)
                .post('/admin')
                .send(newAdmin)
                .expect(201)
                .end((err, res) => {
                    if (err) return done(err);
                    expect(res.body).to.deep.equal(newAdmin);
                    done();
                });
        });
    });

    describe('PUT /admin/:id', () => {
        it('should update an admin', (done) => {
            const updatedAdmin = {
                name: 'Updated Admin',
                email: 'updated@example.com'
            };

            sandbox.stub(Admin, 'findByIdAndUpdate').resolves(updatedAdmin);

            supertest(app)
                .put('/admin/12345')
                .send(updatedAdmin)
                .expect(200)
                .end((err, res) => {
                    if (err) return done(err);
                    expect(res.body).to.deep.equal(updatedAdmin);
                    done();
                });
        });
    });

    describe('DELETE /admin/:id', () => {
        it('should delete an admin', (done) => {
            const deletedAdmin = { name: 'Admin1', email: 'dondulshan.com' };
            sandbox.stub(Admin, 'findByIdAndDelete').resolves(deletedAdmin);

            supertest(app)
                .delete('/admin/12345')
                .expect(201)
                .end((err, res) => {
                    if (err) return done(err);
                    expect(res.body).to.deep.equal(deletedAdmin);
                    done();
                });
        });
    });

    describe('POST /admin/login', () => {
        it('should login an admin', (done) => {
            const loginDetails = { email: 'dondulshan@gmail', password: 'password' };
            const mockAdmin = { email: 'dondulshan@gmail', password: 'password' };

            sandbox.stub(Admin, 'findOne').resolves(mockAdmin);

            supertest(app)
                .post('/admin/login')
                .send(loginDetails)
                .expect(200)
                .end((err, res) => {
                    if (err) return done(err);
                    expect(res.body.status).to.equal('success');
                    done();
                });
        });

        it('should return incorrect password', (done) => {
            const loginDetails = { email: 'dondulshan@gmail.com', password: 'wrongpassword' };
            const mockAdmin = { email: 'dondulshan@gmail', password: 'password' };

            sandbox.stub(Admin, 'findOne').resolves(mockAdmin);

            supertest(app)
                .post('/admin/login')
                .send(loginDetails)
                .expect(201)
                .end((err, res) => {
                    if (err) return done(err);
                    expect(res.body.status).to.equal('incorrect password');
                    done();
                });
        });

        it('should return admin not found', (done) => {
            const loginDetails = { email: 'dondulshan@gmail', password: 'password' };

            sandbox.stub(Admin, 'findOne').resolves(null);

            supertest(app)
                .post('/admin/login')
                .send(loginDetails)
                .expect(201)
                .end((err, res) => {
                    if (err) return done(err);
                    expect(res.body.status).to.equal('admin not found');
                    done();
                });
        });
    });
});
