const welcomeService = require('../../../services/welcome-service');
it('should pass', () => {
  expect(true).toBe(true)
})

describe('[UNIT] welcomeService', () => {
  it("should return an object", async()=> {
    const expected = {
      name: "Atila dos Santos",
      email: "atila.santos@b2wdigital.com"
    }
    const welcome = await welcomeService.welcome();
    expect(welcome).toEqual(expected);
  })
})