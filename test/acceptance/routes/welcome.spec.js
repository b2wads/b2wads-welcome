const request = require('supertest')
const app = require('../../../app');

describe('[ACCEPTANCE]  GET /welcome', () => {
  const expected = {
    name: "Atila dos Santos",
    email: "atila.santos@b2wdigital.com"
  }
  it("should return 200", async()=> {
    const res = await request(app).get('/welcome');
    expect(res.statusCode).toEqual(200);
    expect(res.body).toEqual(expected);
  })
})