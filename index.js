const express = require('express')
path = require('path')
const app = express()
const port = 3000

app.use(express.static(path.join(__dirname, 'node_modules')));

app.get('/index.html', function (req, res) {
  res.sendFile(path.join(__dirname + '/index.html'));
});

app.get('/alpine.js', function (req, res) {
  res.sendFile(path.join(__dirname + '/node_modules/alpinejs/dist/alpine.js'));
});

app.get('/', (req, res) => res.redirect('index.html'))

app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`))