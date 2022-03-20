
const express = require('express');
const ejs = require('ejs');
const { append } = require('express/lib/response');
// require('dotenv/config');

const app = express();
let port = process.env.PORT;

if (port == null || port =='') {
    port = 8000;
}
app.get('/',(req,res)=>{
    res.send({Live:"Uploaded"})
})


app.listen(port,console.log('Server started succesfully'))