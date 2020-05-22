// Use supertest to test HTTP requests/responses
const request = require("supertest");
const app = require("./app");


describe("GET / ", () => {
    test("It should respond with an array of students", async () => {
        const response = await request(app).get("/");
        expect(response.body).toEqual(["Elie", "Matt", "Joel", "Michael"]);
        expect(response.statusCode).toBe(200);
    });
}
);

// https://jsonplaceholder.typicode.com/posts/1/comments
  describe('GET /posts/:id/comments', () => {
      it('responds with json', (done) => {
          request(app)
          .get('/posts')
          .set('Accept', 'application/json')
          .expect('Content-Type', /json/)
          .expect(200, done);
      })
  })

