const http = require('http');
const express = require('express');
const port = process.env.PORT || 3000;
const app = express();
const appRoutes = require('./routes/appRoutes');
const mongoose = require('mongoose');
const cors = require('cors');


//connect to mongoDB cloud mongodb
const dbUri = 'mongodb+srv://ram:ram.test123@todo.edzjf.mongodb.net/todoDb?retryWrites=true&w=majority';

mongoose.connect(dbUri, {useNewUrlParser: true, useUnifiedTopology: true})
  .then((result) => console.log('connected to db'))
  .catch((err) => console.log(err))

app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use('/', appRoutes);

http.createServer(app).listen(port);
console.log('backend is running on port:', port);