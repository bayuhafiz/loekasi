var express = require('express'),
	math = require('mathjs');
var router = express.Router();

// Load up the model files
var Building = require('../models/buildings');

/* GET home page */
router.get('/', function(req, res, next) {
    Building.find({}, function(err, datas) {
        res.render('home', {
            title: 'LOEKASI App',
            buildings: datas
        });
    })
});

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

/* GET details page. */
router.get('/:id', function(req, res, next) {
    var id = req.params.id;
    Building.findById(id, null, function(err, datas) {
        res.render('details', {
            title: 'LOEKASI App',
            details: datas
        });
    })
});

module.exports = router;
