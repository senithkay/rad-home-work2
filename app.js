var express = require('express');
var bodyParser = require('body-parser');
var alert = require('alert');

var app = express();

var matched = require('./matched.js');
app.use(express.static('public'));

app.use('/matched',matched);

var unmatched = require('./unmatched.js');

app.use('/unmatched', unmatched);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', (req,res)=>{
    res.sendFile(__dirname+'/public'+'/form.html');
});

app.post('/validate', (req,res)=>{
    var str1 = req.body.string1;
    var str2 = req.body.string2;
    if (str1===str2)
        res.redirect('/matched');
    else {
        res.redirect("/unmatched");
    }
});



app.listen(8080);
