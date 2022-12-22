const express = require('express');
const path = require('path');
const port = 8000;

const app = express();
app.set('view engine', 'ejs');//setting the value of 'view engine'
app.set('views',path.join(__dirname,'views'));
app.use(express.urlencoded());

// //middleware 1
// app.use(function(req,res,next){
//   console.log('middleware 1 called');
//   next();
// })
// //middleware 2
// app.use(function(req,res,next){
//   console.log('middleware 2 called');
//   next();
// })

app.use(express.static('assets'));



var contactList = [
 {
  name:"arpan",
  phone:"111111111"
 },
 {
  name:"stark",
  phone:"221111111"
 },
 {
  name:"messi",
  phone:"3331111111111"
 }
]


app.get('/',function(req,res)
{
  //console.log(__dirname);
  //res.send("<h1>cool it is running</h1>");
  return res.render('index_home',{
    title:"My contact",
    Contact_list:contactList
});
 
});

 app.get('/',function(req,res)
 {
    //console.log(__dirname);
      res.send("<h1>cool it is running</h1>");
    return res.render('index_home');
 });
app.get('/practise',function(req,res){
  return res.render('practise',
  {title:"Prcatise page"})
});
app.post('/create-contact',function(req,res){
  //return res.redirect('practise');
  //console.log(req.body);
  //console.log(req.body.name);
  contactList.push({
    name:req.body.name,
    phone:req.body.phone
  });
  return res.redirect('/');
});


app.listen(port,function(err) {
  if(err) {
    console.log("error in running the server");
  }
  console.log("server listening",port);
});