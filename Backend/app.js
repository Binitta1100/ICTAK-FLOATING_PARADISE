const express = require('express');
const HouseboatData = require('./src/model/Houseboatdata');
const UserData = require('./src/model/Userdata');
const BookingData = require('./src/model/Bookingdata');
const cors = require('cors');
const jwt = require('jsonwebtoken');
var bodyparser = require('body-parser');
var app = new express();
app.use(cors());
app.use(express.json());
email="admin@gmail.com";
pwd="123456";

function verifyToken(req,res,next){
    if(!req.headers.authorization){
        return res.status(401).send('Unauthorized request');
      }
      let token = req.headers.authorization.split(' ')[1]
      if(token == 'null'){
        return res.status(401).send('Unauthorized request');
      }
      let payload = jwt.verify(token, 'secretKey')
      if(!payload){
        return res.status(401).send('Unauthorized request');
      }
      req.userId = payload.subject;
      next();
}

app.post('/newuser', function(req,res){
    res.header("Access-Control-Allow-Origin","*");
    res.header("Access-Control-Allow-Methods: GET, POST, PATCH, PUT, DELETE, OPTIONS");
    console.log(req.body);
    var user = {
        username : req.body.user.username,
        email : req.body.user.email,
        pwd : req.body.user.pwd
    }
    var user = new UserData(user);
    user.save();
});

app.post('/login',function(req,res){
    let userData = req.body;
    UserData.findOne({email: userData.email})
    .then(function(user){
        if(user.pwd == userData.pwd){
            let payload = {subject:email+pwd};
            let token = jwt.sign(payload,'secretKey');
            res.status(200).send({token});
        }
        else{
            res.status(401).send('Invalid Password');
        }
    })
    .catch(function(){
        res.status(401).send('Invalid Email');
    }) 
});

app.get('/houseboats', verifyToken, function(req,res){
    res.header("Access-Control-Allow-Origin","*");
    res.header("Access-Control-Allow-Methods: GET, POST, PATCH, PUT, DELETE, OPTIONS");
    HouseboatData.find()
    .then(function(houseboats){
        res.send(houseboats);
    });
});

app.post('/insert', verifyToken, function(req,res){
    res.header("Access-Control-Allow-Origin","*");
    res.header("Access-Control-Allow-Methods: GET, POST, PATCH, PUT, DELETE, OPTIONS");
    console.log(req.body);
    var houseboat = {
        houseboatid : req.body.houseboat.houseboatid,
        type : req.body.houseboat.type,
        desc : req.body.houseboat.desc,
        rate : req.body.houseboat.rate,
        img : req.body.houseboat.img
    }
    var houseboat = new HouseboatData(houseboat);
    houseboat.save();
});

app.get('/bookings', verifyToken, function(req,res){
    BookingData.find()
    .then(function(bookings){
        res.send(bookings);
    });
});

app.put('/edithouseboat', (req,res)=>{
    console.log(req.body)
    id=req.body._id,
    houseboatid = req.body.houseboatid,
    type = req.body.type,
    desc = req.body.desc,
    rate = req.body.rate,
    img = req.body.img
    HouseboatData.findByIdAndUpdate({"_id":id},
                                {$set:{
                                "houseboatid":houseboatid,
                                "type":type,
                                "desc":desc,
                                "rate":rate,
                                "img":img}})
   .then(function(){
       res.send();
   })
});

app.delete('/deletehouseboat/:id', function(req,res){
    res.header("Access-Control-Allow-Origin","*");
    res.header("Access-Control-Allow-Methods: GET, POST, PATCH, PUT, DELETE, OPTIONS");
    const id = req.params.id;
    HouseboatData.remove({_id: id})
    .then(function(){
        res.status(200).json({id});
    })
});

app.delete('/deletebooking/:id', function(req,res){
    res.header("Access-Control-Allow-Origin","*");
    res.header("Access-Control-Allow-Methods: GET, POST, PATCH, PUT, DELETE, OPTIONS");
    const id = req.params.id;
    BookingData.deleteOne({_id: id})
    .then(function(){
        res.status(200).json({id});
    })
});

app.post('/bookhouseboat', function(req,res){
    console.log(req.body);
    var booking = {
        bookpersonname : req.body.booking.bookpersonname,
        bookpersonemail : req.body.booking.bookpersonemail,
        bookhouseboatid : req.body.booking.bookhouseboatid,
        booktype : req.body.booking.booktype,
        noofpersons : req.body.booking.noofpersons,
        date : req.body.booking.date
    }
    var booking = new BookingData(booking);
    booking.save();
});

app.get('/getuser/:email', function(req, res){
    const email = req.params.email;
    UserData.findOne({"email":email})
    .then((user)=>{
          res.send(user);
      });
  });

app.get('/:id', function(req, res){
    const id = req.params.id;
    HouseboatData.findOne({"_id":id})
    .then((houseboat)=>{
          res.send(houseboat);
      });
  });

app.listen(3000, function(){
    console.log('Listening to port 3000');
});