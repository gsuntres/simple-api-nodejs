const express = require('express')
const app = express()
const bodyParser = require('body-parser')

app.use(bodyParser.json())
app.use('/bubbleSort', require('./routes/bubble-sort'))
app.use('/mergeSort', require('./routes/merge-sort'))

app.use(function(err, req, res, next) {
  res.status(500).send('Error: ' + err.message)
})

app.use(function(req, res, next) {
  res.status(404).send('Page not found');
})

var serve = app.listen(1234, function() {
  var host = serve.address().address
  var port = serve.address().port

  console.log(`Listening http://${host}:${port}`)
})
