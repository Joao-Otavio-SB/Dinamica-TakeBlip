const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose')

const app = express();
const petRoute = require('./src/routes/pet-routes')

mongoose.connect('mongodb+srv://dinamica-take:bZfrhmLL3R7omtWI@cluster0.rjei7.mongodb.net/dinamica-db?retryWrites=true&w=majority', {useNewUrlParser: false,useUnifiedTopology: true})

const PORT = process.env.PORT || 3000

app.use(cors());
app.use(express.json());

app.use('/', petRoute);

app.listen(PORT);

