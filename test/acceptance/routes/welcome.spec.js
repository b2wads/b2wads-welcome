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

const request = require("supertest")

const app = require("../../../app")

describe("Welcome test", () => {
  describe("GET /welcome", () => {
    let res = undefined

    beforeAll(async () => {
      res = await request(app).get("/welcome")
    })

    it("should return 200", () => {
      expect(res.status).toBe(200)
    })

    it("should return { newIntern: 'laura.rosa' }", () => {
      expect(res.body).toHaveProperty("newIntern", "laura.rosa")
    })
  })
})