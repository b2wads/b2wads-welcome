const WelcomeService = require("../services/welcome-service")

const WelcomeController = {
  async welcome(req, res) {
    
    /**
     * Implemente um retorno JSON asíncrono
     * com código 200, que chama o método welcome()
     * de services/welcome-service.js
     */

     const welcomeData = await WelcomeService.welcome();

     return res.status(200).json(welcomeData);
    
  }
}

module.exports = WelcomeController
