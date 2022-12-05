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
const { data } = require('jquery');
  app.use(express.static('public'))
  app.use(express.urlencoded({ extended: true }));
  
  app.get('/', function(req, res) {
    res.sendFile(__dirname + "/" + "/public/index.html");
  });

const kayn = Kayn("RGAPI-12ec028c-3dcb-415a-94d6-1906be3fa22f")({region: REGIONS.EUROPE}/* optional config */)


/////////////////////////////////////
app.all("/summonerInfo", function(req, res) { //searching summoner| get id, accountId, puuid, name ... 
  res.setHeader('Content-Type', 'text/html');

  res.json([{
    summonerNickname: req.body.summonerNickname, server: req.body.server
  }])

  kayn.Summoner.by.name(req.body.summonerNickname).region(req.body.server)
  .callback(function(error, data) {
    console.log(data);


    kayn.Match.get("EUN1_3261457281").callback(function(error, data) {
      console.log(data);
      console.log(error);
    });
  })


})

app.listen(8008, () =>
console.log(
  'HTTP Server up. Now go to http://localhost:8008/index.html in your browser.'
));