const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const PORT = 4000;
const cors = require('cors');
const mongoose = require('mongoose');

//Connection string to mongodb
var mongoDB ='mongodb+srv://Admin:Admin@cluster0-q2zrn.mongodb.net/test?retryWrites=true&w=majority';

//Connect to database

mongoose.connect(mongoDB, {useNewUrlParser:true});

//Needed for body parssing

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());


//Get reference to schema
const Schema = mongoose.Schema;
//Create new schema for 
const playersSchema = new Schema({
    fname:String,
    lname:String,
    age:String,
    club:String

});

//Create model for the database
const PlayersModel = mongoose.model("PlayersInfo", playersSchema);

//Use Cross reference Origin system
app.use(cors());

//Helps to avoid CORS errors
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
    res.header("Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

//Get the list of players from the mongo database
app.get('/players',(req, res, next) =>{
    //Store the players in a variable for easy access
    const players = 
    //Retrieve the data from the PlayersModel
    PlayersModel.find((err,data) =>{
        //Retrieve data as json data
        res.json({players:data});
    })
})

//Used to get a players by id
app.get('/players/:id', (req, res, next) => {

    console.log(req.params.id);
    
    //Find a players in the database by their id
    PlayersModel.findById(req.params.id, function (err, data) {
        //Return the data as json
        res.json(data);
    });
})

//Used to get players based on their job
app.get('/players/search/:job', (req,res) =>{
    //Look for robots with the job
    PlayersModel.find({'fname': req.params.job}, function (err, data) {
        //Return the data as json
        res.json(data);
    });
})

//Add new players data to the database
app.post('/players', (req, res) =>{
    console.log("Post successful");
    console.log(req.body);
    console.log(req.body.fname);
    console.log(req.body.lname);
    console.log(req.body.age);
    console.log(req.body.club);

    //Create a players using the information posted
    PlayersModel.create({
        fname: req.body.fname,
        lname: req.body.lname,
        age: req.body.age,
        club: req.body.club
    });

    res.json("Data Uploaded");
})

//Remove a player from the database
app.delete('/players/:id', (req,res) =>{
    //Delete the player from the database
    PlayersModel.deleteOne({_id:req.params.id},(error,data) => {
        //Check for error
        if(error)
            //Show the error
            res.json(error);
        
        res.json(data);
    })
})

//Used to update a player in the database
app.put('/players/:id', function (req, res) {

    //Display the id of the player being edited
    console.log("Update Players " + req.params.id);
    //List details
    console.log(req.body)
    console.log(req.body.fname);
          console.log(req.body.lname);
          console.log(req.body.age);
          console.log(req.body.club);

    //Find the player in the database and update the information
    PlayersModel.findByIdAndUpdate(req.params.id, req.body, {new: true},
    function(err, data){
        res.send(data);
    })
})

app.listen(PORT, () => console.log(`Example app listening on port ${PORT}!`))
