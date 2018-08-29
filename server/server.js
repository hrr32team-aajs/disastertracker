const express = require('express')
const request = require('request')
const session = require('express-session')
const bodyParser = require('body-parser')
const path = require('path')
const log = require('ololog')
const events = require('./util/location.js')
const utils = require('./helper.js')
const user = require('./util/users.js')
const loc = require('./util/location.js')

const app = express()

app.use(
  require('express-session')({
    secret: 'repalceByRightkey@110',
    resave: false,
    saveUninitialized: false,
  })
);

app.use(bodyParser.json())
app.use(express.static(`${__dirname}/../client/dist`))

app.get('/', function (req, res) {
  res.redirect('/');
});

app.get('/', utils.events);

app.get('/api/', function (req, res) {
  res.send('Server running')
});

app.post('/api/login', utils.login);

app.get('/api/logout', utils.logout);

app.post('/api/signup', utils.signup)

app.get('/api/event', utils.checkLoggedIn, function (req, res) {
  res.send('Server running')
});

// app.get('/api/location', utils.checkLoggedIn, user.userLocation);

app.post('/api/location', utils.checkLoggedIn, loc.saveLocation);

app.put('/api/location', utils.checkLoggedIn, loc.updateLocation);

app.delete('/api/location', utils.checkLoggedIn, loc.deleteLocation);

//include user location, array of locations.
app.get('/api/user', utils.checkLoggedIn, user.userLocation);

app.post('/api/user', utils.checkLoggedIn, function (req, res) {
  res.send('Server running')
});

app.put('/api/user', utils.checkLoggedIn, function (req, res) {
  res.send('Server running')
});

app.delete('/api/user');

const port = process.env.PORT || 3000

app.listen(port, function () {
  log(`Application listening on port ${port}`)
})