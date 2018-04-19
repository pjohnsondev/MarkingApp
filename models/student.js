var mongoose = require("mongoose");
var Schema = mongoose.Schema;
//Schema setup
var studentSchema = new Schema({
    number: Number,
    contents: Number,
    structure: Number,
    fluency: Number,
    participation: Number,
    minus: Number,
    total: Number,
    updated: { type: Date, default: Date.now },
});

module.exports = mongoose.model("Student", studentSchema);