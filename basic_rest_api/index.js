const express = require('express');
const bodyParser = require('body-parser');

const app = express();

const PORT = 3000;

app.use(bodyParser.json());

//mimic the db using array

let blogList = [];

app.get('/blogs',(req,res) => {
    return res.status(200).json({
        data:blogList,
        success: true,

    })
});

app.post('/blogs',(req,res)=>{
    console.log(req.body)
})

app.listen(PORT, ()=>{
    console.log('server started at port',PORT);
});

