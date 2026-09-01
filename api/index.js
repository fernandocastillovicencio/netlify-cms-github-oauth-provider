const app = require('../app')

// Vercel serverless entrypoint: forwards any request to the Express app.
module.exports = (req, res) => {
  return app(req, res)
}
