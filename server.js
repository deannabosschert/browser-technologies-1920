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

let rawDoses = []
let doses = []

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
  res.render("index", {
    doses: doses
  })
}

function addDose(req, res) {
  const rawDose = {
    name: req.body.name,
    amount: req.body.amount,
    unit: req.body.unit,
    time: req.body.time,
    date: req.body.date
  }

  const totalRawDoses = rawDoses.push(rawDose)
  cleanData()


  // const dose = cleanData(rawDose)
  // update doses in localStorage here..

  // const diens = doses.forEach(function(dose) {
  //   const doseDates = Object.keys(dose)
  //   console.log(doseDates)
  //   // const ddd = doseDates.flat()
  //   // console.log(ddd)
  //   return doseDates
  // })


  // const test1 = doses[0]
  // const date_name = Object.getOwnPropertyNames(test1)
  // console.log(date_name)



  res.redirect('/')
}


function removeDose(req, res) {
  // check of ie nog local in doses staat, zoja daaruit deleten
  // zonee maak connectie met mongo en gooi m daaruit
  // iets met this.dose en body.ding en array.find
  res.redirect('/')
}

function cleanData() {
  const groupedDoses = groupBy(rawDoses, 'date')
  doses = []
  const totalRawDoses = doses.push(groupedDoses)
  // console.log(doses)
//
//   const diens = doses.forEach(function(dose) {
//     const doseDate = Object.getOwnPropertyNames(dose)
//     console.log(doseDate)
//     // const ddd = doseDates.flat()
//     // console.log(ddd)
//     return doseDate
//   })
//
//   const help = doses.forEach(function(dose) {
//   const datum = Object.getOwnPropertyNames(dose)
//   return datum
// })
  // console.log(diens)
  // console.log(help)
  //
  //
}

//   const cleanDose = rawDose.map(dose => ({
//     name: dose.name,
//     amount: dose.amount,
//     unit: dose.unit,
//     time: dose.time,
//     dates: {
//       [dose.date]: dose
//     }
//   }))
//   const dose = cleanDose[0].dates
//   return dose
// }
// async function addtoDB () {
//   add aan mongodb
//   const iets = await addaanmongo
//   reset doses naar = [] ofzo?
// }
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
