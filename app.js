const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

require('./config/db')();

const router = express.Router();

app.use(require('./routes'));

app.listen(9000, function() {
  console.log('App is running at port 9000');
});
