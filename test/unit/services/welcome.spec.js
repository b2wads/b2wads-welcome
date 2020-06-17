const WelcomeService = require('../../../services/welcome-service')
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

describe('welcomeService', () => {
  describe('welcome()', () => {
    it('Should return newB as specified', async () => {
      const welcomeData = await WelcomeService.welcome()

      expect(welcomeData).toMatchObject({
        name: 'Stephani Knupp da Silva',
        age: 19,
        food: 'Açaí',
        isHungry: true,
        skills: ['Node.Js', 'HTML', 'CSS'],
        course: 'Ciência da Computação'
      })
    })
  })
})
