const welcomeService = require("../../../services/welcome-service")

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

describe("Welcome Service", () => {
  describe("welcome", () => {
    it("should return Nelson\'s newB object", async () => {
      const returnedNewB = await welcomeService.welcome();
      const expectedNewB = {
        nome: "Nelson Antunes Laranjeira Neto",
        gostaDe: ["programar", "estudar", "jogar", "CHURRAS"],
        meta: "Dobrar a meta"
      };
      
      expect(returnedNewB).toMatchObject(expectedNewB);
    })
  })
})

