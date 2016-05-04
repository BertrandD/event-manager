var router = require('express').Router();
var ObjectId = require('mongoose').Types.ObjectId;
var Tournament = require('../models/tournament');
var slugify = require('slugify');
var url = require('url');
var pick = require('lodash/pick');
var forEach = require('lodash/forEach');

router.post('/', function (req, res) {
    if (!req.body.name) {
        res.statusCode = 400;
        res.json({err: 'Name missing'});
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
                date: req.body.date,
                hour: req.body.hour,
                description: req.body.description,
                rules: req.body.rules,
                fields: req.body.fields
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

router.put('/:id', function (req, res) {
    Tournament.findOne({_id: req.params.id}, function (err, result) {
        if (!result) {
            res.statusCode = 404;
            res.json({err: 'Tournament not found !'});
        } else {
            forEach(pick(req.body, ['name', 'date', 'hour', 'description', 'rules', 'fields']), (value, key) => {
                result[key] = value
            });
            result.save(function (err, result) {
                if (err) {
                    res.statusCode = 500;
                    res.json({err: err.message});
                    return;
                }

                res.json(result);
            })
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

    var query = url.parse(req.url, true).query;

    const filter = {};

    if (!query.filter || query.filter !== 'all') {
        filter.status = {
            '$in': ['closed', 'open']
        }
    }

    Tournament.find(filter, function (err, results) {
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