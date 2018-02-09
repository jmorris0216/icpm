'use strict';

var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var MilestonesSchema = new Schema({
    _id: Schema.Types.ObjectId,
    project_id: { type: Schema.Types.ObjectId, ref: 'Project' },
    type: String,
    tasks: {},
    end_date: Date
});
//export our module to use in server.js
module.exports = mongoose.model('Milestone', MilestonesSchema);