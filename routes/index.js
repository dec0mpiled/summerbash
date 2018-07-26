var express = require('express');
var router = express.Router();
var app = express();
var  APP = require('../models/apps');

/* GET home page. */
router.get('/', function(req, res, next) {
    
    res.render('index', {title: "Summer Bash 2018!"});
    
});


router.get('/thanks', function(req, res, next) {
    
    res.render('done', {title: "Application Received!"});
    
});

/* GET apply page. */
router.get('/apply', function(req, res, next) {
    
    APP.countDocuments({}, function(err, num) {
        
        if (err) throw next (err);
        var freeSpots = (10-num);
    
    res.render('application', {title: "Apply to Enter Summer Bash!", mNum:num, free:freeSpots});
    
    });
    
});

router.post("/submitapp", function(req, res, next) {
    
    var myAPP = new APP ({
    
        
    teamName: req.body.teamname,

        
        
    });
    
    myAPP.save();
    console.log(myAPP)
    
    res.redirect("/thanks");
    
});



module.exports = router;
