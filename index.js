const express = require('express');
var parser = require('body-parser');
const path = require('path');
const rateCalc = require('./calculateRate');
const PORT = process.env.PORT || 5000;

express()
  .use(parser.urlencoded({ extended: false }))
  .use(parser.json())
  .use(express.static(path.join(__dirname, 'public')))
  .set('views', path.join(__dirname, 'views'))
  .set('view engine', 'ejs')
  .get('/', (req, res) => res.render('pages/index'))
  .get('/rateCalc', (req, res) => res.render('pages/postalRateCalculator', {
      type: null,
      weight: null,
      rate: null
  }))
  .post('/rateCalc', (req, res) => {
      let type = req.body.type;
      let weight = req.body.weight;
      let rate = rateCalc(type, weight);
      res.render('pages/postalRateCalculator', {
          type: type,
          weight : weight,
          rate: rate
      });
  })
  .listen(PORT, () => console.log(`Listening on ${PORT}`));
