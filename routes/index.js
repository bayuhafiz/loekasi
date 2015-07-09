var express = require('express'),
    math = require('mathjs');
var router = express.Router();

// Load up the model files
var Building = require('../models/buildings');

/* GET home page */
// 1st page
router.get('/', function(req, res, next) {
    Building.find({}, {}, {
        limit: 30
    }, function(err, datas) {
        res.render('home', {
            title: 'LOEKASI App',
            buildings: datas
        });
    })
});

/* GET details page. */
router.get('/p/:id', function(req, res, next) {
    var id = req.params.id;
    Building.findById(id, null, function(err, datas) {
        res.render('details', {
            title: 'LOEKASI App',
            details: datas,
            listings: datas.listing
        });
    })
});


/* API ROUTES */
/* Get listing  */
router.get('/get/listing/:id', function(req, res, next) {
    var id = req.params.id;
    Building.findById(id, {'listing':1}, function(err, datas) {
        res.json(datas);
    })
});

/* Get listing > last date */
router.get('/get/date/:id', function(req, res, next) {
    var id = req.params.id;
    Building.findById(id, {
        '_id': 0,
        'listing.dateposted': 1
    }, function(err, datas) {
        res.json(datas);
    })
});

/* Get listing > price */
router.get('/get/price/:id', function(req, res, next) {
    var id = req.params.id;
    Building.findById(id, {
        '_id': 0,
        'listing.price': 1
    }, function(err, datas) {
        res.json(datas);
    })
});

/* Get listing > price */
router.get('/get/size/:id', function(req, res, next) {
    var id = req.params.id;
    Building.findById(id, {
        '_id': 0,
        'listing.size': 1
    }, function(err, datas) {
        res.json(datas);
    })
});

/* Get listing > type */
router.get('/get/type/:id', function(req, res, next) {
    var id = req.params.id;
    Building.findById(id, {
        '_id': 0,
        'listing.type': 1
    }, function(err, datas) {
        res.json(datas);
    })
});



/* FOR TESTING PURPOSE!!! */
router.get('/json', function(req, res, next) {
    Building.find({}, {
        '_id': 1,
        'name': 1
    }, function(err, datas) {
        res.json(datas);
    })
});
router.get('/test', function(req, res, next) {
    res.render('test', {
        title: 'LOEKASI App'
    });
});

module.exports = router;
