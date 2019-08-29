const welcomeService = require('../services/welcome-service');

const WelcomeController = {
  async welcome(req, res) {
    
    /**
     * Implemente um retorno JSON asíncrono
     * com código 200, que chama o método welcome()
     * de services/welcome-service.js
     */
    const data = await welcomeService.welcome();
    res.json(data);
  }
}

module.exports = WelcomeController
