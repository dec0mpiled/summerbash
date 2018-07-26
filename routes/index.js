var express = require('express');
var router = express.Router();
var app = express();
var  APP= require('../models/apps');

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
    playerOne: req.body.p1name,
    playerTwo: req.body.p2name,
    p1Console: req.body.p1platform,
    p2Console: req.body.p2platform,
    canStream: req.body.canstream,
    email: req.body.email,
        
        
    });
    
    myAPP.save();
    
    res.redirect("/thanks");
    
});



module.exports = router;
