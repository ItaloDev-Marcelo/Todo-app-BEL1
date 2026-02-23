require('dotenv').config()
const express = require('express');
const app = express();
const PORT = process.env.PORT || 5000;
const connectToDB = require('./Database/db');
const router = require('./Routes/routes.todo')
app.use(express.json())

app.use('/api/todos', router)
connectToDB()

app.listen(PORT, () => {
    console.log(`server is running on ${PORT}`)
})