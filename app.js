const _kayn = require('kayn')
const Kayn = _kayn.Kayn
const REGIONS = _kayn.REGIONS

const express = require('express');
const app = express();

const kayn = Kayn("RGAPI-12ec028c-3dcb-415a-94d6-1906be3fa22f")(/* optional config */)

app.get('/login', (req, res) => {
    
  });

//kayn.Summoner.by.name d


app.listen(8008, () =>
console.log(
  'HTTP Server up. Now go to http://localhost:8008/home in your browser.'
));