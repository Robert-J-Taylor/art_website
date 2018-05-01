var express = require('express');
var router = express.Router();
var Product = require('../models/product');

router.get('/gallery', function (req, res, next) {
    Product.find(function (err, docs) {
        if(err){
            res.send(err);
        }
        
       res.json(docs);
    console.log(docs);
    });
});

router.get('/gallery/:id', function(req,res,next){
    Product.findById(req.params.id, function(err,docs){
        if(err) return next(err);
        res.json(docs);
    });
});

 module.exports = router;