const request = require('supertest');
const app = require('../../../app');
/**
 * Assim como você implementou os testes unitários,
 * agora é o momento de implementar os testes de aceitação da sua app.
 *
 * Você deverá enviar uma requisição para a rota `/welcome` e verificar se:
 *
 * - O status retornado (`req.status`) é igual a `200`
 * - O conteúdo retornado da request (`req.body`) é igual ao que você informou em `newB`
 * - Remover o caso de teste `should pass` abaixo 
 *
 * Utilizamos a biblioteca Jest para escrever nossos testes
 * Saiba mais em: https://jestjs.io/en/
 */

describe('Welcome test', () => {
  let res = undefined
  
  beforeAll(async () => {
    res = await request(app).get('/welcome');
  });

  it('should return 200', async () => {
    expect(res.status).toBe(200);
  });

  it('should return newB in body', async () => {
    expect(res.body).toEqual({
      name: 'Stephani Knupp da Silva',
      age: 19,
      food: 'Açaí',
      isHungry: true,
      skills: ['Node.Js', 'HTML', 'CSS'],
      course: 'Ciência da Computação'
    });
  });
});
