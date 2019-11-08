var express = require('express');
var router = express.Router();
var request = require('request');

/* GET home page. */
router.get('/', function(req, res) {
  res.sendFile('index.html', { root: 'public' });
});

router.get('/shows/:query', function(req,res) {
    var shows = "http://api.tvmaze.com/search/shows?q=" + req.params.query;
    console.log("In shows");
    request(shows).pipe(res);
});

router.get('/showinfo/:query', function(req,res) {
    var showInfo = "http://api.tvmaze.com/shows/" + req.params.query;
    console.log("In showInfo");
    console.log(showInfo);
    request(showInfo).pipe(res);
});

module.exports = router;
