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
  .use(express.static('src'))
  .post('/add', addDose)
  .post('/add', removeDose)
  .get('/', overview)
  .listen(port, () => {
    console.log(`App listening on port ${port}!`)
  })

function overview(req, res) {
  console.log('voor renderen:')
  console.log(doseTables)
  // console.log(doseTables[0])
  res.render("index", {
    doseTables: doseTables
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

  // rawDoses = []
  const totalRawDoses = rawDoses.push(rawDose)
  cleanData()
  res.redirect('/')


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

console.log('doses')
console.log(doses)
doseTables = []

  doses.forEach(dose => {
      let markup = ''
      markup += createTable(dose)
      const totals = doseTables.push(markup)
      // console.log(totals)
      return
  })
  // console.log('doseTables')

  // console.log(doseTables)



}

// dagen = []
  // const losseDatums = Object.keys(doses[0])
  // const totalDates = dagen.push(losseDatums)
  function createTable(dose) {
      return `
          <p>${dose.day}</p>
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



  // const day = dagen[0]
  // const dag = day[0]

  // console.log(doses[0])
  // const nieuw = doses[0]
  // const iets = nieuw
  //
  // const losseDag = Object.values(nieuw)
  // console.log(losseDag)

  // console.log(dag)
  // console.log(iets)
  // console.log(Object.values(doses))





  //   const dates = doses.forEach(function(dose) {
  //   const data = Object.getOwnPropertyNames(dose)
  //   console.log(data)
  //   return data
  // })
  //
  // console.log('datums:')
  // console.log(dates)
  //


  // { '2020-06-02':
  //    [ { name: 'Modafinil',
  //        amount: '100',
  //        unit: 'mg',
  //        time: '13:12',
  //        date: '2020-06-02' },
  //      { name: 'Modafinil',
  //        amount: '100',
  //        unit: 'mg',
  //        time: '13:12',
  //        date: '2020-06-02' } ] }

  // { '2020-06-02':
  //    [ { name: 'Modafinil',
  //        amount: '100',
  //        unit: 'mg',
  //        time: '13:12',
  //        date: '2020-06-02' },
  //      { name: 'Modafinilss',
  //        amount: '100',
  //        unit: 'mg',
  //        time: '13:12',
  //        date: '2020-06-02' } ],
  //   '2020-09-18':
  //    [ { name: 'Modafinil',
  //        amount: '100',
  //        unit: 'mg',
  //        time: '13:12',
  //        date: '2020-09-18' } ] }
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
