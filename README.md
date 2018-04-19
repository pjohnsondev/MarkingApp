# MarkingApp
A web app used for storing the results of a speaking test I perform in my duties as a teacher. 
It takes a reference number and four separate values as scores. 
These scores are automatically calculated into a field "total" and saved to the database on submit.

Dependencies:
NodeJS
MongoDB
node packages: express, body-parser, mongoose, and method-override



The model is currently set with keys relevant to my marking schema but can be edited to represent your own.

If you wish to change the schema changes must be made accross a number of files.
Steps:
1) under models/student.js change the required fields between "number" and "updated" inside the studentSchema instatiation.
2) If you wish re-name the document "student.js" to a more relevant model name
3) direct children of the directory 'views/' need to be edited so that the table elements and forms relate to your new schema keys. (Do not worry about editing anything within the 'partials' directory)
4) in 'app.js' change any instance that refers to the model Student,
    takes or returns a param student,
    recieves data from a post, put, or delete method,
    uses "/:id" in the url,
    and any code that relates to the Student schema's keys (number, contents, structure, fluency, participation, minus,total, or updated if not used your model)
5) Adjust line 126 to the port of your preference