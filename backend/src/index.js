const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const routes = require('./routes');

const app = express();
// Parameter Types
// Query Params: request.query (Filter, Orders, Paginations) 
// Route Params: request.params (Identify a feature on change or removal)
// Body: request.body (Data for creating or changing a register)

// MongoDB (Non-relational)

mongoose.connect('mongodb+srv://omnistack:omnistack@cluster0-uqr4x.mongodb.net/week10?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true,
});

app.use(cors());
app.use(express.json());
app.use(routes);

app.listen(3333);
