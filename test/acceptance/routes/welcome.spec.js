const request = require('supertest')
const app = require('../../../app');

describe('[ACCEPTANCE]  GET /welcome', () => {
  const expected = {
    user: "camila.barroso",
    email: "camila.barroso@b2wdigital.com",
    idade: 23
  }
  it("should return 200", async()=> {
    const res = await request(app).get('/welcome');
    expect(res.statusCode).toEqual(200);
    expect(res.body).toEqual(expected);
  })
})
