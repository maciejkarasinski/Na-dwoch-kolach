const express = require('express');
const path = require('path');
const router = express.Router();

const app = express();
app.use(express.static('public'));

router.get('/', function (req, res) {
  res.sendFile(path.join(__dirname + '/public/home.html'));
});

router.get('/dlaczego-rower', function (req, res) {
  res.sendFile(path.join(__dirname + '/public/dlaczego.html'));
});

router.get('/rodzaje-rowerow', function (req, res) {
  res.sendFile(path.join(__dirname + '/public/rodzaje.html'));
});

router.get('/rower-szosowy', function (req, res) {
  res.sendFile(path.join(__dirname + '/public/szosowy.html'));
});

router.get('/rower-gorski', function (req, res) {
  res.sendFile(path.join(__dirname + '/public/gorski.html'));
});

router.get('/rower-miejski', function (req, res) {
  res.sendFile(path.join(__dirname + '/public/miejski.html'));
});

router.get('/akcesoria-rowerowe', function (req, res) {
  res.sendFile(path.join(__dirname + '/public/akcesoria.html'));
});

router.get('/kask-rowerowy', function (req, res) {
  res.sendFile(path.join(__dirname + '/public/kask.html'));
});

router.get('/pompka-do-roweru', function (req, res) {
  res.sendFile(path.join(__dirname + '/public/pompka.html'));
});

router.get('/lampka-do-roweru', function (req, res) {
  res.sendFile(path.join(__dirname + '/public/lampka.html'));
});

router.get('/galeria-zdjec-rowery', function (req, res) {
  res.sendFile(path.join(__dirname + '/public/galeria.html'));
});

router.get('/wymagania-projektu', function (req, res) {
  res.sendFile(path.join(__dirname + '/public/wymagania.html'));
});

app.use('/', router);
app.listen(process.env.PORT || 3000);
