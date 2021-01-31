const express = require("express");


const database = require("./db.js");

//console.log(database.test());

const app = express()
app.use(express.json())


app.get("/tasks", (req,res) => {

    res.send({
        code: 200,
        data: database.GetTask()
    });

});

app.get("/tasks/:task_id/timeslices", (req,res) => {

    res.send({
        code: 200,
        data: database.GetTimeslicesFor(task_id)
    });

});


app.get("/timeslices", (req,res) => {

    res.send({
        code: 200,
        data: database.GetTimeslices()
    });

});

app.post("/tasks", (req, res) => {
    console.log(req.body);
    res.send();
})

app.listen(3000, () => {

    console.log('Ok funziona!!');

});