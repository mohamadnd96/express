
var express = require('express')
var app = express()
app.get('/', function (req, res) {
    res.send('hamoudi')
})

app.get('/test', function (req, res) {
    res.send('unknown data type')
})

var server = app.listen(8000, function () {
    var host = server.address().address;
    var port = server.address().port;
    console.log('running')
})

