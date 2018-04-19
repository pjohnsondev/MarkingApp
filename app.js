var express        = require("express"),
    app            = express(),
    bodyParser     = require("body-parser"),
    mongoose       = require("mongoose"),
    Student        = require("./models/student"),
    methodOverride = require("method-override");
    // seedDb         = require("./seed"); This was used for testing purposes only and is not required unless testing

mongoose.connect("mongodb://localhost/marking_app", {
  useMongoClient: true,
});
app.set("view engine", "ejs");
app.use(express.static(__dirname + "/public"))
app.use(bodyParser.urlencoded({extended: true}));
app.use(methodOverride("_method"));

app.get("/", function(req, res){
    Student.find({}).sort({number: 1}).exec(function(err, allStudents){
        if(err){
            console.log(err)
        } else {
            res.render("index", {students: allStudents});
        }
    });
});

app.post("/", function(req, res){
    var number = parseInt(req.body.number);
    var contents = parseInt(req.body.contents);
    var structure = parseInt(req.body.structure);
    var fluency = parseInt(req.body.fluency);
    var participation = parseInt(req.body.participation);
    var minus = parseInt(req.body.minus);
    var total = (contents + structure + fluency + participation - minus);
    var newStudent = {number: number, contents: contents, structure: structure, fluency: fluency,
                      participation: participation, minus: minus, total: total};
    Student.findOne({number: number}, function(err, number){
        if(err){
            console.log(err)
        }
        if(number){
            res.redirect("/")
        } else{
            Student.create(newStudent, function(err, newlyCreated){
                if(err){
                    console.log(err);
                } else {
                    console.log("new student");
                    res.redirect("/");
                }
            });
        };
    });
});

app.get("/display", function(req, res){
    Student.find({}).sort({number: 1}).exec(function(err, allStudents){
        if(err){
            console.log(err)
        } else {
            res.render("display", {students: allStudents})
        }
    });
});

app.get("/displayByTotalAscending", function(req, res){
    Student.find({}).sort({total: 'asc'}).exec(function(err, allStudents){
        if(err){
            console.log(err)
        } else {
            res.render("displayByTotalAscending", {students: allStudents})
        }
    });
});

app.get("/displayByTotalDescending", function(req, res){
    Student.find({}).sort({total: 'desc'}).exec(function(err, allStudents){
        if(err){
            console.log(err)
        } else {
            res.render("displayByTotalDescending", {students: allStudents})
        }
    });
});

app.get("/student/:id", function(req, res){
    Student.findById(req.params.id, function(err, foundStudent){
        if(err){
            console.log(err)
        } else {
            res.render("student", {student: foundStudent})
        }
    });
});

app.get("/student/:id/edit", function(req, res){
    Student.findById(req.params.id, function(err, foundStudent){
        if(err){
            console.log(err)
        } else {
            res.render("edit", {student: foundStudent})
        }
    });
});

app.put("/student/:id", function(req, res){
    Student.findByIdAndUpdate(req.params.id, req.body.student, function(err, updatedStudent){
        if(err){
            console.log(err)
        } else {
            res.redirect("/" + req.params.id)
        }
    })
})

app.delete("/student/:id", function(req, res){
    Student.findByIdAndRemove(req.params.id, function(err){
        if(err){
            console.log(err);
        } else {
            res.redirect("/");
        }
    });
})

app.listen(3000, function(){
    console.log("Server Started")
});