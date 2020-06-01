const express = require('express')
const bodyParser = require('body-parser')
const app = express()
// let doses = 0
// let dose - object = {
//   name: name,
//   dose: dose,
//   time: time,
//   date: date
// }

let doses = [{
  name: "modafinil",
  dose: "200mg"
}]


const port = process.env.PORT || 3000

app.use(bodyParser.urlencoded({
    extended: true
  }))
  .set('view engine', 'ejs')
  .use(express.static('src'))
  .post('/add', addDose)
  .post('/add', removeDose)
  .get('/', overview)
  .listen(port, () => {
    console.log(`Example app listening on port ${port}!`)
  })

function overview(req, res) {
  console.log(doses)
  res.render("index", {
    doses: doses
  })
}

function addDose(req, res) {
  let dose = {
    name: req.body.name,
    amount: req.body.amount
  }
  console.log(dose)
  var total = doses.push(dose)
  console.log(total)
  console.log(doses)
  // doses++
  res.redirect('/')
}


function removeDose(req, res) {
  doses--
  res.redirect('/')
}