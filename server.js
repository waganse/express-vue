const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(
  bodyParser.urlencoded({
    extended: false,
  })
);

// app.use(express.static('public'));

app.get('/', (req, res) => {
  res.send(`
    <html>
      <head></head>
      <body>
        <p>AAAA</p>
      </body>
    </html>
  `)
});

app.listen(80);

