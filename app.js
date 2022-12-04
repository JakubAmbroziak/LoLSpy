const _kayn = require('kayn')
const Kayn = _kayn.Kayn
const REGIONS = _kayn.REGIONS

const express = require('express');
const app = express();
var bodyParser=require("body-parser");
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

  const path = require('path');       // for opening .html files after entering url
  const { send } = require('process');
  app.use(express.static('public'))
  app.use(express.urlencoded({ extended: true }));
  
  app.get('/', function(req, res) {
    res.sendFile(__dirname + "/" + "/public/index.html");
  });


const kayn = Kayn("RGAPI-12ec028c-3dcb-415a-94d6-1906be3fa22f")(/* optional config */)

app.listen(8008, () =>
console.log(
  'HTTP Server up. Now go to http://localhost:8008/index.html in your browser.'
));