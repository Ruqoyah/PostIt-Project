import supertest from 'supertest';
import chai from 'chai';
import app from './server';

const expect = chai.expect;
const requestHandler = supertest(app);

const testUser = {
  username: 'ruqoyah',
  firstname: 'Rukayat',
  lastname: 'Odukoya',
  email: 'ruqoyah@gmail.com',
  password: 'oriyomi',
  cpassword: 'oriyomi'
};

const testGroup = {
  groupname: 'codespire',
  groupdescription: 'aiming beyond code',
};

describe('User', () => {
  it('should create a user', (done) => {
    // Create user
    requestHandler.post('/api/user/signup')
      .set('Accept', 'application/json')
      .send(testUser)
      .expect(201)
      .end((err, res) => {
        expect(res.body.status).to.equal('success');
        expect(res.body.data.user.email).to.equal(testUser.email);

    it('should not create same username twice', (done) => {
    requestHandler.post('/api/user/signup')
      .set('Accept', 'application/json')
      .send(testUser)
      .expect(400)
      .end((err, res) => {
        expect(res.body.status).to.equal('fail');
        expect(res.body.message).to.equal('Username already exists!');
        done();
      });
  });
  it('should not create same email twice', (done) => {
    requestHandler.post('/api/user/signup')
      .set('Accept', 'application/json')
      .send(testUser)
      .expect(400)
      .end((err, res) => {
        expect(res.body.status).to.equal('fail');
        expect(res.body.message).to.equal('Email already exists');
        done();
      });
  });
  it('should fail if password does not match', (done) => {
    requestHandler.post('/api/user/signup')
      .set('Accept', 'application/json')
      .send(testUser)
      .expect(400)
      .end((err, res) => {
        expect(res.body.status).to.equal('fail');
        expect(res.body.message[0]).to.equal('Password does not match');
        done();
      });
  });
  it('should login', (done) => {
    // Sign in
    requestHandler.post('/api/user/signin')
      .set('Accept', 'application/json')
      .send({
        username: 'ruqoyah@gmail.com',
        password: 'oriyomi',
      })
      .expect(201)
      .end((err, res) => {
        expect(res.body.status).to.equal('success');
        expect(res.body.message).to.equal('User has been signed up successfully');
        done();
      });
  });
});
  describe('Group', () => {
  it('should create a group', (done) => {
    // Create group
    requestHandler.post('/api/group')
      .set('Accept', 'application/json')
      .send(testGroup)
      .expect(201)
      .end((err, res) => {
        expect(res.body.status).to.equal('success');
        expect(res.body.data.user.groupname).to.equal(testGroup.groupname);

  it('should fail if group name is not provided', (done) => {
    requestHandler.post('/api/group')
      .set('Accept', 'application/json')
      .send(testGroup)
      .expect(400)
      .end((err, res) => {
        expect(res.body.status).to.equal('fail');
        expect(res.body.message[0]).to.equal('Enter group name');
        done();
      });
  });
   it('should not create the same group name twice', (done) => {
    requestHandler.post('/api/group')
      .set('Accept', 'application/json')
      .send(testGroup)
      .expect(400)
      .end((err, res) => {
        expect(res.body.status).to.equal('fail');
        expect(res.body.message).to.equal('Group name already exist');
        done();
      });
  });
  it('should add user to group', (done) => {
    // Add users to group
    requestHandler.post('/api/group/:groupId/user')
      .set('Accept', 'application/json')
      .send({
        username: 'ruqoyah',
      })
      .expect(201)
      .end((err, res) => {
        expect(res.body.status).to.equal('success');
        expect(res.body.message).to.equal('User Added successfully');
        done();
      });
  });
  it('should fail if username is not provided', (done) => {
    requestHandler.post('/api/group/:groupId/user')
      .set('Accept', 'application/json')
      .send(testGroup)
      .expect(401)
      .end((err, res) => {
        expect(res.body.status).to.equal('fail');
        expect(res.body.message[0]).to.equal('Enter username');
        done();
      });
  });
  it('should fail if user is already in the group', (done) => {
    requestHandler.post('/api/group/:groupId/user')
      .set('Accept', 'application/json')
      .send(testGroup)
      .expect(400)
      .end((err, res) => {
        expect(res.body.status).to.equal('fail');
        expect(res.body.message[0]).to.equal('User is already a group user');
        done();
      });
  });
 it('should be able to get messages from a group', (done) => {
   // Get messsages from group
    requestHandler.get('/api/group/:groupId/messages')
      .set('Accept', 'application/json')
      .expect(201)
      .end((err, res) => {
        expect(res.body.data.userId).to.equal(userId);
        expect(res.body.data.userGroup).to.equal(userGroup);
        expect(res.body.data.message).to.equal(message);
        done();
      });
  });
});