const express = require('express');
const app = express();
const phones = require('./phones.json');
const port = 5000;




app.get('/', (req, res) => {
    res.send("hello world from node!") 
});


app.get('/phones', (req, res)=> {
    res.send(phones);
})



app.listen(port, ()=> {
    console.log(`Server Running on port ${port}`)
});