const _kayn = require('kayn')
const Kayn = _kayn.Kayn
const REGIONS = _kayn.REGIONS

const express = require('express');
const app = express();
var bodyParser=require("body-parser");
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());


const kayn = Kayn("RGAPI-12ec028c-3dcb-415a-94d6-1906be3fa22f")(/* optional config */)

app.get('/login', (req, res) => {
    
  });
  app.get('/', function(req, res) {
    res.sendFile(__dirname + "/" + "/public/home.html");
  });

  app.post("/request", (req, res) => {
    res.json([{
       name_recieved: req.body.name,
       designation_recieved: req.body.designation
    }])
 })

app.listen(8008, () =>
console.log(
  'HTTP Server up. Now go to http://localhost:8008/ in your browser.'
));