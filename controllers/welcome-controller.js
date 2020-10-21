const WelcomeService = require("../services/welcome-service")

const WelcomeController = {
  async welcome(req, res) {
    const welcome = await WelcomeService.welcome()
    await res.status(200).json(welcome)
  }
}

module.exports = WelcomeController
