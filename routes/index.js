var express = require('express');
const { response } = require('../app');
var router = express.Router();
const app = express();
const fetch = require('node-fetch');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Find Your Solace' });
});


router.get('/findforestroads', function(req, res, next) {
  const {name} = req.query;
  const whereClause = `NAME like '%${name}%'`;
  const outputFields = 'OBJECTID,RTE_CN,EMP,NAME,SEG_LENGTH,SURFACE_TYPE';
  const url =`https://apps.fs.usda.gov/arcx/rest/services/EDW/EDW_RoadBasic_01/MapServer/0/query?where=${whereClause}&outFields=${outputFields}&returnGeometry=false&outSR=4326&f=json`;
  console.log(url);
  fetch(url).
  then(res=>res.json()).then(data=>{
    if(data.error!=undefined) {
      res.statusCode=500;
    }
      res.send(data);
    
  }).catch(error=>{
    res.statusCode=500;
    res.statusMessage = "Oh! Might be some error on server.Please try again";
    res.send(error);
  });  
});

// app.post('/', function (req, res) {
//   res.send('Got a POST request')
// })

// app.put('/user', function (req, res) {
//   res.send('Got a PUT request at /user')
// })

// app.delete('/user', function (req, res) {
//   res.send('Got a DELETE request at /user')
// })

module.exports = router;
