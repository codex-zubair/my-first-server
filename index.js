const express = require('express');
const app = express();
const phones = require('./phones.json');
const port = 5000;

// added cors.
const cors = require('cors');
app.use(cors());



app.get('/', (req, res) => {
    res.send("hello world from node!!2!!")
});


app.get('/phones', (req, res) => {
    res.send(phones);
});



app.get('/phones/:id', (req, res) => {

    const id = parseInt(req.params.id);
    const phone = phones.find(ph => ph.id === id) || {}
    res.send(phone);


})



app.listen(port, () => {
    console.log(`Server Running on port ${port}`)
});