const request = require("supertest")

const app = require("../../../app")

describe("Welcome test", () => {
  describe("GET /welcome", () => {
    let res = undefined

    beforeAll(async () => {
      res = await request(app).get("/welcome")
    })

    it("should return 200", () => {
      expect(res.status).toBe(200)
    })

    it("should return { newIntern: 'laura.rosa' }", () => {
      expect(res.body).toHaveProperty("newIntern", "laura.rosa")
    })
  })
})