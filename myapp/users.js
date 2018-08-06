var express = require('express')
var app = express()
 
app.get('/', function (req, res) {
    res.json({"hassan":"testing in progressy"});
})
 
app.listen(3000)






// const express = require('express');



// //const express = require("express");
// //  const app = express();

// var router = express.Router();

// router.get('/',function(req,res,next)
// {
// res.json({"hassan":"testing"});

// });
// module.exports = router; 

// // router.post('/add',function(req,res,next)
// // {
// // console.log(req);
// // console.log(req.body);
// // console.log(req.body.name);

// // res.json({"success":true})
// // });

