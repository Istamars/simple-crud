const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const db = require('./app/models');

const app = express();

var corsOptions = {
  origin: 'http://localhost:3001',
};

app.use(cors(corsOptions));

// parse requests of content-type - application/json
app.use(bodyParser.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

db.sequelize.sync();

// endpoint
app.use('/dummy', require('./app/routes/dummy.routes'));

// simple route
app.get('/', (req, res) => {
  res.json({ message: 'Welcome to bezkoder application.' });
});

// set port, listen for requests
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});
