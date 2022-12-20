const express = require('express');
const path = require('path');
const port = 8000;

const app = express();
app.set('view engine', 'ejs');//setting the value of 'view engine'
app.set('views',path.join(__dirname,'views'));


app.get('/',function(req,res)
{
  //console.log(__dirname);
  //res.send("<h1>cool it is running</h1>");
  return res.render('index_home',{title:"My contact"});
});
 app.get('/',function(req,res)
 {
    console.log(__dirname);
      res.send("<h1>cool it is running</h1>");
    return res.render('index_home');
 });
app.get('/practise',function(req,res){
  return res.render('practise',
  {title:"Prcatise page"})
});


app.listen(port,function(err) {
  if(err) {
    console.log("error in running the server");
  }
  console.log("server listening",port);
});