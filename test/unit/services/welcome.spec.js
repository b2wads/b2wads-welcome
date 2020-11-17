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

const { welcome } = require("../../../services/welcome-service")

describe('Welcome Service', () => {
  it('should be able to return expected object', async () => {
    const welcomeData = await welcome();
  
    expect(welcomeData).toEqual({
      name : "Gabriel",
      lastname : "Santos",
      email: "gabriel.hssantos@b2wdigital.com",
      age : 24
    }) 
  })
})

