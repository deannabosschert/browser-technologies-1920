const Api = require('./api');

// get: (route) => {
// function get(route) {
//   // if (window.localStorage.getItem(`"${route}"`) === null) {
//   //   console.log(`no ${route}data found in localStorage`)
//   Api.get(route)
//   return
// } else {
//   console.log("data found in localStorage 🤓")
//   Data.parse(route)
// }
// }
// store: (route, data) => {
//   localStorage.setItem(`"${route}"`, JSON.stringify(data))
//   Data.parse(route)
// },
// parse: (route) => {
//   const data = JSON.parse(localStorage.getItem(`"${route}"`))
//   Data.render(route, data)
// },
// function render(route, data) {
//   if (route === "overview" || route === "books") {
//     res.render('index', {
//       nerds: data
//     })
//   } else {
//     console.log("yeet")
//   }
// }


const Yeet = {
  get: (route) => {
    Api.get(route)
  },
  render: (route, data) => {
    if (route === "overview" || route === "books") {
      console.log("test1")
    } else {
      console.log("test2")
    }
  }
}

module.exports = Yeet