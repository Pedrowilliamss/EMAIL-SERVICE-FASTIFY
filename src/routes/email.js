const emailController = require("../controllers/EmailController")

async function EmailRouts(server) {
    server.post("/send", emailController.sendEmail);
}

module.exports = EmailRouts;