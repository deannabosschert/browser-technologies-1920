const express = require('express')
const app = express()
const Api = require('./modules/Api.js');

app.use(express.static('./public'))
app.set('view engine', 'ejs')
app.set('views', './views')

app.get('/', function(req, res) {
  Api.get("home", "cmda-minor-web").then(data => {
    res.render('index.ejs', {
      repos: data
    })
  })
})

app.get('/course/:repo', function(req, res) {
  const repo = req.params.repo
  Api.get("course", "cmda-minor-web", repo).then(data => {
    res.render('course.ejs', {
      nerds: data
    })
  })
})

app.get('/nerds/:id', function(req, res) {
  const nerdId = req.params.id
  Api.get("nerdProfile", nerdId).then(data => {
    const user = data[1].owner.login
    res.render('nerd.ejs', {
      nerd: data,
      userName: user
    })
  })
})

app.get('/nerds/:id/:repo', function(req, res) {
  const nerdId = req.params.id
  const repo = req.params.repo
  Api.get("nerdRepo", nerdId, repo).then(data => {
    console.log(data)
    res.render('nerdRepo.ejs', {
      nerd: data
    })
  })
})

// app.get('/search', function(req, res) {
//   [hier iets met checken wat er gezocht wordt]
//   Api.get("nerdProfile", nerdId).then(data => {
//     const user = data[1].owner.login
//     res.render('nerd.ejs', {
//       nerd: data,
//       userName: user
//     })
//   })
// })

const server = app.listen(8000, function() {
  console.log('server is running on port 8000')
})