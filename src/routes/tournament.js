var router = require('express').Router();
var ObjectId = require('mongoose').Types.ObjectId;
var Tournament = require('../models/tournament');
var slugify = require('slugify');

router.post('/', function (req, res) {
    if (!req.body.name || !req.body.start_date || !req.body.end_date) {
        res.statusCode = 400;
        res.json({err: 'Name or start date or end date missing'});
        return;
    }

    var slug = slugify(req.body.name);

    Tournament.find({_id: slug}, function (err, results) {
        if (results.length > 0) {
            res.statusCode = 400;
            res.json({err: 'Name already used !'});
        } else {
            new Tournament({
                _id: slug,
                name: req.body.name,
                start_date: req.body.start_date,
                end_date: req.body.end_date
            }).save(function (err, result) {
                if (err) {
                    res.statusCode = 500;
                    res.json({err: err.message});
                    return;
                }

                res.json(result);
            });
        }
    });
});

router.get('/:id', function (req, res) {
    Tournament.findOne({
        _id: req.params.id
    }, function (err, results) {
        if (err) {
            res.statusCode = 500;
            res.json({err: err.message});
            return;
        }

        if (!results) {
            res.statusCode = 404;
            res.json({err: 'Tournament nod found'});
            return;
        }

        res.statusCode = 200;
        res.json(results);
    });
});

router.get('/', function (req, res) {
    Tournament.find({
        status: {
            '$in': ['closed', 'open']
        }
    }, function (err, results) {
        if (err) {
            res.statusCode = 500;
            res.json({err: err.message});
            return;
        }

        res.statusCode = 200;
        res.json(results);
    });
});

module.exports = router;