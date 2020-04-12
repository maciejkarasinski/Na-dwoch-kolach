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

app.use('/', router);
app.listen(process.env.PORT || 3000);

console.log('Running');
