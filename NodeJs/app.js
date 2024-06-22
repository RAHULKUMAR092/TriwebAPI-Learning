const express = require('express');

const cal = require('./controller/controller')

const app = express();
app.use(express.json());

app.get('/',(req, res)=>{
    res.send("hello");

});
app.use('/controller',cal);

app.listen(3000);