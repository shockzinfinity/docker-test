var mongoose = require('mongoose')

var express = require('express')

mongoose.connect('mongodb://root:1234@api.shockz.io:27017/?authSource=admin&readPreference=primary&appname=MongoDB%20Compass&ssl=false', {
    useNewUrlParser: true
})

const db = mongoose.connection

db.once('open', function () {
    console.log('success db connection!!!!!!!!!!!!!!!!!!!!!!!!')
})
db.on('error', function (err) {
    console.log(`DB error!!!!!!!!!!!!!!!!!!!!!! ${err}`)
})

var Book = require('./models/book')

var app = express()

app.get('/', function (req, res) {
    res.send('hi there')
})

app.get('/newbook', function (req, res) {
    var new_book = new Book()
    new_book.title = "책1"
    new_book.desc = "책1 입니다."
    new_book.save(function (err) {
        if (err) {
            res.send('FAILURE!!!!!!!!!!!')
            return
        }
    })
    res.send("SUCCESS !!!!!!!!!!!!!!")
})

app.get('/getbook1', function (req, res) {
    Book.find({ title: '책1' },
        function (err, books) {
            if (err) {
                res.send('ERROR !!!!!!!!')
            } else if (books.length === 0) {
                res.send('책 없음')
            } else {
                res.send(books)
            }
        })
})

app.listen(3000, function () {
    console.log('app is running at port 3000!!!!!!')
})