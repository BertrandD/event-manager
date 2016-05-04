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
        date: {
            type: String,
            default: ''
        },
        hour: {
            type: String,
            default: ''
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
        },
        fields: {
            type: Array,
            default: ''
        }

    });

schema.pre('save', function (callback) {
    if (!this.author) {
        this.author = 'Anonymous';
    }

    this.date_modified = Date.now();

    return callback();
});

module.exports = mongoose.model('Tournament', schema);
