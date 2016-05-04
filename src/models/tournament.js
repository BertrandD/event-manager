var mongoose = require('mongoose');

var schema =
    new mongoose.Schema({
        _id: {
            type: String,
            require: true
        },
        date_created: {
            type: Date,
            default: Date.now
        },
        date_modified: {
            type: Date,
            default: Date.now
        },
        name: {
            type: String,
            require: true
        },
        start_date: {
            type: Date,
            require: true
        },
        end_date: {
            type: Date,
            require: true
        },
        status: {
            type: String,
            default: 'private'
        },
        description: {
            type: String,
            default: ''
        },
        rules: {
            type: String,
            default: ''
        }

    });

schema.pre('save', function (callback) {
    if (!this.author) {
        this.author = 'Anonymous';
    }

    return callback();
});

module.exports = mongoose.model('Tournament', schema);
