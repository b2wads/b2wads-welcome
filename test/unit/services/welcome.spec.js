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
const welcomeService = require('../../../services/welcome-service');
it('should pass', () => {
  expect(true).toBe(true)
})

describe('[UNIT] welcomeService', () => {
  it("should return an object", async()=> {
    const expected = {
      user: "camila.barroso",
      email: "camila.barroso@b2wdigital.com",
      idade: 23
    }
    const welcome = await welcomeService.welcome();
    expect(welcome).toEqual(expected);
  })
})