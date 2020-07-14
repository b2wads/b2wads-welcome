const WelcomeService = require("../../../services/welcome-service")

describe("WelcomeService", () => {
  describe("welcome()", () => {
    it("should return { newIntern: 'laura.rosa' } ", async () => {
      const newB = await WelcomeService.welcome()
      expect(newB).toMatchObject({
        newIntern: "laura.rosa",
        email: "laura.rosa@b2wdigital.com"
      })
    })
  })
})
