const express = require('express');
const mongoose = require('mongoose')

const app = express()

app.set('view engine', 'ejs')

app.use(express.static('public'));
app.use(express.urlencoded({extended:true}));

app.get("/user", (req,res) => {
    res.json({"users": ["firstuser", "seconduser", "thirduser"]}, 
    "swachhcoins":{[]}
})

app.listen(5000, () => {
    console.log("Server started  on port 5000!")
});