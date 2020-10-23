/* eslint-env node, jest */
const server = require('../app');
const supertest = require('supertest');
const request = supertest(server);

describe('POST api request', () => {
  afterEach(() => {
    server.close()
  })
  
  it('should respond with a status of 200', async done => {
    const res = await request.post('/');
    expect(res.status).toBe(200);
    done();
  });
    it('should contain app tested + failure type', async done => {
      const params = {
        case: 'status',
        actual: 404,
        expected: 400,
        url: 'https://bobcat.library.nyu.edu/this/is/a/test/please/ignore'
       }
      const result = "{\"case\":\"status\",\"actual\":404,\"expected\":400,\"url\":\"https://bobcat.library.nyu.edu/this/is/a/test/please/ignore\"}"
      const res = await request.post('/').send(params);
      expect(res.text).toBe(result);
      done();
    });
  });