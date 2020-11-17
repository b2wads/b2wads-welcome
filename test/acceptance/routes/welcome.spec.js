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

 const request = require('supertest');
 const app = require('../../../app');

describe('GET /welcome', () => {

  let welcomeData = undefined;

  beforeAll(async () => {
    welcomeData = await request(app).get('/welcome');
  })

  it('should be able to return status 200', () => {
    expect(welcomeData.status).toBe(200);
  
  })

  it('should be able to return object expected', () => {
    expect(welcomeData.body).toEqual({
      name : "Gabriel",
      lastname : "Santos",
      email: "gabriel.hssantos@b2wdigital.com",
      age : 24
    }) 
  })
})