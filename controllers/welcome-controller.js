const welcomeService = require('../services/welcome-service');

const WelcomeController = {
  async welcome(req, res) {
    const newB = await welcomeService.welcome();
    return res.status(200).json(newB);
    
  }
}

module.exports = WelcomeController
