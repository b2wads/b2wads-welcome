/**
 * Agora você irá implementar os testes unitários da sua app.
 *
 * Você deverá validar se:
 *
 * - o Método `welcome()` em `services/welcome-service.js` está
 *   retornando o que você configurou no objeto `newB`
 * - Remover o caso de teste `should pass` abaixo
 *
 * Utilizamos a biblioteca Jest para escrever nossos testes
 * Saiba mais em: https://jestjs.io/en/
 */

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
