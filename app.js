const _kayn = require('kayn')
const Kayn = _kayn.Kayn
const REGIONS = _kayn.REGIONS

const express = require('express');
const app = express();
var bodyParser=require("body-parser");
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());


const kayn = Kayn("RGAPI-12ec028c-3dcb-415a-94d6-1906be3fa22f")(/* optional config */)

//kayn.Summoner.by.name

app.post('/createEmp', function(req, res){  
    //now req.body will be populated with the object you sent
    console.log(req.body.name); //prints john
    });

app.listen(8008, () =>
console.log(
  'HTTP Server up. Now go to http://localhost:8008/home.html in your browser.'
));

