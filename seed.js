// This was used for testing purposes, if used it will completely clear all data and write a simgle entry

var mongoose = require("mongoose");
var Student = require("./models/student");

var data = [
    {
        number: 01,
        contents: 0,
        structure: 0,
        fluency: 0,
        participation: 0,
        minus: 0,
        total: 0,
    },
]

function seedDb(){
    	Student.remove({}, function(err){
		if(err){
			console.log(err);
		} else {
		    console.log("Removed Students");
            data.forEach(function(seed){
                Student.create(seed, function(err, student){
                        if(err){
                            console.log(err)
                        } else {
                            console.log("Student created")
                            student.save();
                        }
                });
            });
        };
    });
};
    

module.exports = seedDb