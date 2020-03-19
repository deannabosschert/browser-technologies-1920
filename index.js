const express = require('express')
const bodyParser = require('body-parser')
const app = express()
let doses = 0

const port = process.env.PORT || 3000

app.use(bodyParser.urlencoded({
    extended: true
  }))
  .set('view engine', 'ejs')
  .use(express.static('src'))
  .post('/addDose', addDose)
  .post('/removeDose', removeDose)
  .get('/', overview)
  .listen(port, () => {
    console.log(`Example app listening on port ${port}!`)
  })

function overview(req, res) {
  res.render("index", {
    doses: doses
  })
}

function addDose(req, res) {
  doses++
  res.redirect('/')
}

function removeDose(req, res) {
  doses--
  res.redirect('/')
}