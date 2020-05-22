// Use supertest to test HTTP requests/responses
const request = require("supertest");
const app = require("./app");

describe('the entry point of the application', () => {
    it('receives a GET request at /', done => {
        request
            .get('/')
            .expect(200, 'Welcome to my API')
            .end()
    })

    //https://jsonplaceholder.typicode.com/posts/1/comments
    it('recieves GET requests at /posts/:id/comments', () => {
        request
            .get('posts/1/comments')
            .expect(200)
            .end((err, res) => {
                done()
            })
    })

    //https://jsonplaceholder.typicode.com/albums/1/photos
    it('recieves GET requests at /albums/:id/photos', () => {
        request
            .get('albums/1/photos')
            .expect(200)
            .end((err, res) => {
                done()
            })
    })

    //https://jsonplaceholder.typicode.com/users/1/albums
    it('recieves GET requests at /users/:id/albums', () => {
        request
            .get('posts/1/comments')
            .expect(200)
            .end((err, res) => {
                done()
            })
    })

    //https://jsonplaceholder.typicode.com/users/1/todos
    it('recieves GET requests at /users/:id/todos', () => {
        request
            .get('users/1/todos')
            .expect(200)
            .end((err, res) => {
                done()
            })
    })

    //https://jsonplaceholder.typicode.com/users/1/posts
    it('recieves GET requests at /users/:id/posts', () => {
        request
            .get('users/1/posts')
            .expect(200)
            .end((err, res) => {
                done()
            })
    })
})
// POST test
describe('Post Endpoints', () => {

    //https://jsonplaceholder.typicode.com/posts/1/comments
    it('should create a new comment on a post', async () => {
        const res = await request(app)
            .post('/posts/1/comments')
            .send({
                userId: 1,
                name: 'id labore ex et quam laborum',
                email: 'Eliseo@gardner.biz',
                body: 'laudantium enim quasi est quidem magnam voluptate ipsam eos\ntempora quo necessitatibus\ndolor quam autem quasi\nreiciendis et nam sapiente accusantium',
            })
        expect(res.statusCode).toEqual(201)
        expect(res.body).toHaveProperty('post')
    })

    //https://jsonplaceholder.typicode.com/albums/1/photos
    it('should create a new photo in an album', async () => {
        const res = await request(app)
            .post('/albums/1/photos')
            .send({
                id: 1,
                title: 'accusamus beatae ad facilis cum similique qui sunt',
                url: 'https://via.placeholder.com/600/92c952',
                thumbnailUrl: 'https://via.placeholder.com/150/92c952',
            })
        expect(res.statusCode).toEqual(201)
        expect(res.body).toHaveProperty('post')
    })

      //https://jsonplaceholder.typicode.com/users/1/albums
    it('should create a new album for a user', async () => {
        const res = await request(app)
            .post('/users/1/albums')
            .send({
                id: 1,
                title: 'quidem molestiae enim',
            })
        expect(res.statusCode).toEqual(201)
        expect(res.body).toHaveProperty('post')
    })

})

