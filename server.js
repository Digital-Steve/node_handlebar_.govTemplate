'use strict';

const express = require('express');
const path = require('path');
const app = express();
const exphbs  = require('express-handlebars');
const bodyParser = require('body-parser');


// Setup view engine
app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

// parse application/x-www-form-urlencodedx
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.use(express.static(path.resolve(path.join(__dirname, '/dist'))));
app.use('/public', express.static(path.resolve(path.join(__dirname, '/public'))));

app.get('/', (req, res) => {
  res.render('home', {
      title: 'Home page'
  });
});

const PORT = process.env.PORT || 8080;

app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`);
  console.log('Press Ctrl+C to quit.');
})
