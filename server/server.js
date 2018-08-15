const express = require('express')
const bodyParser = require('body-parser')
const path = require('path')
const log = require('ololog')

const app = express()

app.use(bodyParser.json())
app.use(express.static(`${__dirname}/../client/dist`))

app.get('/', function(req, res) {
  res.redirect('/');
});

app.get('/api/', function (req, res) {
  res.send('Server running')
});

app.get('/api/event');

app.get('/api/location');

app.get('/api/user'); //include user location, array of locations.

app.post('/api/user');

app.put('/api/user');

app.delete('/api/user');

const port = process.env.PORT || 3000

app.listen(port, function() {
  log(`Application listening on port ${port}`)
})
