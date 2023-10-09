const express = require('express');
const cors = require('cors'); //Cross Origin Resource Sharing
const compression = require('compression')

const userRouter = require('./routers/userRouter')
const orderRouter = require('./routers/orderRouter')


const app = express();

// Middleware Functions
app.use(compression())
app.use(cors())
app.use(express.json())

// Routers
app.use('/user', userRouter)
app.use('/order', orderRouter)

module.exports = app;