// rename this to app.test.js when read to run

describe('GET /user', function() {
    it('responds with json', function(done) {
      request(app)
        .get('/user')
        .set('Accept', 'application/json')
        .expect('Content-Type', /json/)
        .expect(200, done);
    });
  });