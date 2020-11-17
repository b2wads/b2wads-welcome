const WelcomeService = {
  async welcome() {
    /**
     *
     * NewB é como chamamos os novos membros do time.
     *
     * Saiba mais sobre nosso processo de recrutamento em:
     * https://medium.com/@jorgemallet/como-a-b2w-digital-recruta-b633634c5e1b
     *
     * Modifique os valores de `newB` abaixo ↓
     * implemente algumas propriedades a esse objeto
     *
     */

    const newB = {
      // Adicione propriedades aqui
      name : "Gabriel",
      lastname : "Santos",
      email: "gabriel.hssantos@b2wdigital.com",
      age : 24
    }

    return newB
  }
}

module.exports = WelcomeService
