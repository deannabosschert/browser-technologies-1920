const express = require('express')
const bodyParser = require('body-parser')
const app = express()
let dosesByDay = []
let rawDoses = []
let dagen = []
let doseTables = []

const port = process.env.PORT || 3000

app.use(bodyParser.urlencoded({
    extended: true
  }))
  .set('view engine', 'ejs')
  .use(express.static(__dirname + '/public'))
  .post('/add', addDose)
  .get('/', overview)
  .listen(port, () => {
    console.log(`App listening on port ${port}!`)
  })

function overview(req, res) {
  res.render("index", {
    doseTables: doseTables
  })
}

function addDose(req, res) {
  const getData = Object.entries(req.body).map(([key, value]) => {
    return {
      reqData: key,
      niets: value
    }
  })
  const reqJson = getData[0].reqData
  const rawDose = JSON.parse(reqJson);  
  const totalRawDoses = rawDoses.push(rawDose)
  const tables = cleanData()
  res.status(200)
  console.log(tables)
  res.send(tables)
}


function removeDose(req, res) {
  // check of ie nog local in doses staat, zoja daaruit deleten
  // zonee maak connectie met mongo en gooi m daaruit
  // iets met this.dose en body.ding en array.find
  res.redirect('/')
}

function cleanData() {
  const dosesByDay = groupBy(rawDoses, "date")

  const doses = Object.entries(dosesByDay).map(([key, value]) => {
    return {
      day: key,
      medicin: value
    }
  })

  // clear out doseTables as we're putting in the entire log in again bc of regrouping
  doseTables = []

  doses.forEach(dose => {
    let markup = ''
    markup += createTable(dose)
    const totals = doseTables.push(markup)
    return
  })

  return doseTables
}

function createTable(dose) {
  return `
          <h3>${dose.day}</h3>
          <table class="table">
              ${dose.medicin.map(medicin => {
                  return `
                      <tr>
                      <td>${medicin.time}</td>
                      <td>${medicin.name}</td>
                      <td>${medicin.amount}</td>
                      <td>${medicin.unit}</td>
                      <td><img class="editIcon" src="./img/icons/icon_pencil.png" alt="edit"></td>
                      </tr>
                  `
              }).join('')}
          </table>
      `
}

function groupBy(objectArray, property) {
  return objectArray.reduce((acc, obj) => {
    const key = obj[property]
    if (!acc[key]) {
      acc[key] = []
    }
    // Add object to list for given key's value
    acc[key].push(obj)
    return acc
  }, {})
}
