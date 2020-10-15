const welcomeService = require('../services/welcome-service');

const WelcomeController = {
  async welcome(req, res) {
    
    /**
     * Implemente um retorno JSON asíncrono
     * com código 200, que chama o método welcome()
     * de services/welcome-service.js
     */
    const newB = await welcomeService.welcome();
    return res.status(200).json(newB);
    
  }
}

module.exports = WelcomeController
