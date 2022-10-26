var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  
  
  if (Object.keys(req.query).length === 0) {
    var x=Math.random();
    res.render('computation', { value1: `Math.imul() applied to ${x} is ${Math.imul(x)}`,
    value2: `Math.log() applied to ${x} is ${Math.log(x)}` ,
    value3: `Math.log10() applied to ${x} is ${Math.log10(x)}` });
  }
  else{

    for (let y in req.query) {

      console.log(y)

      res.render('computation', { value1: `Math.imul() applied to ${req.query[y]} is ${Math.imul(req.query[y])}`,
      value2: `Math.log() applied to ${req.query[y]} is ${Math.log(req.query[y])}` ,
      value3: `Math.log10() applied to ${req.query[y]} is ${Math.log10(req.query[y])}`})

    }
  }


});


module.exports = router;