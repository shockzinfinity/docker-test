var mongoose = require('mongoose')

var express = require('express')

mongoose.connect('연결문자열', {
    useNewUrlParser: true
})

const db = mongoose.connection

db.once('open', function() {
    console.log('success db connection!!!!!!!!!!!!!!!!!!!!!!!!')
})
db.on('error', function(err) {
    console.log(`DB error!!!!!!!!!!!!!!!!!!!!!! ${err}`)
})

var app = express()

app.get('/', function(req, res) {
    res.send('hi there')
})

app.listen(3000, function() {
    console.log('app is running at port 3000!!!!!!')
})