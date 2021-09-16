const express = require('express');
const employees = require('./routes/employees');
const config = require('./config/config');

const app = express();

app.use(express.json());
app.use('/employees', employees);

app.listen(config.port, config.hostname, ()=>{
    console.log(`Server Running at http://${config.hostname}:${config.port}/`);
})