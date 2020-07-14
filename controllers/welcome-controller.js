const WelcomeService = require("../services/welcome-service")

const WelcomeController = {
  async welcome(req, res) {
    const newB = await WelcomeService.welcome() 
    await res.status(200).json(newB)
  }
}

module.exports = WelcomeController
