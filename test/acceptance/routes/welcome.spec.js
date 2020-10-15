const request = require('supertest')
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

describe('GET /welcome', () => {
  it("should return Nelson's newB object and 200 status code", async () => {
    const expectedNewB = {
      nome: "Nelson Antunes Laranjeira Neto",
      gostaDe: ["programar", "estudar", "jogar", "CHURRAS"],
      meta: "Dobrar a meta"
    };
    const response = await request(app).get('/welcome');
    expect(response.statusCode).toEqual(200);
    expect(response.body).toMatchObject(expectedNewB);
  })
})
