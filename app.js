require('dotenv').config({ silent: true })
const express = require('express')
const middleWarez = require('./index.js')
const port = process.env.PORT || 3000

const app = express()

// Initial page redirecting to Github
app.get('/auth', middleWarez.auth)

// Callback service parsing the authorization token
// and asking for the access token
app.get('/callback', middleWarez.callback)

app.get('/success', middleWarez.success)
app.get('/', middleWarez.index)

// Listen only when run directly (traditional server: node app.js).
// On Vercel (serverless) the app is imported by api/index.js instead —
// calling app.listen() inside a serverless function crashes it.
if (require.main === module) {
  app.listen(port, () => {
    console.log("Netlify CMS OAuth provider listening on port " + port)
  })
}

module.exports = app
