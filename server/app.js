const express = require('express')
const app = express()

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.get('/data', function (req, res) {
  res.sendFile(__dirname + '/data/states-data.JSON')
})

app.listen(3000, function () {
  console.log('App listening on port 3000')
})
