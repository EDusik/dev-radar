const cors = require('cors');
const express = require('express');
const mongoose = require('mongoose');

const routes = require('./routes');
const http = require('http');
const app = express();
const server = http.Server(app);
const { setupWebsocket } = require('./websocket');

// Parameter Types
// Query Params: request.query (Filter, Orders, Paginations) 
// Route Params: request.params (Identify a feature on change or removal)
// Body: request.body (Data for creating or changing a register)

// MongoDB (Non-relational)

setupWebsocket(server);

mongoose.connect('mongodb+srv://omnistack:omnistack@cluster0-uqr4x.mongodb.net/week10?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true,
});

app.use(cors());
app.use(express.json());
app.use(routes);

server.listen(3333);
