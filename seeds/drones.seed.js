// Iteration #1

// Connecting to the DB
require('../db')

//create the DronesCollection elements
const myDrones = [
    {name: 'Creeper XL 500', propellers: 3, maxSpeed: 12},
    { name: 'Racer 57', propellers: 4, maxSpeed: 20 },
    { name: 'Courier 3000i', propellers: 6, maxSpeed: 18 }    
]


//Insert the DronesCollection to the DB 
const mongoose = require('mongoose');
const DronesCollection = require('../models/Drone.model.js')

DronesCollection.create(myDrones) //this is a promise. So we need to consume it. 

.then(()=>{
    console.log("yay! all good");
    mongoose.connection.close()
})

.catch(()=>{
    console.log("There was a problem adding the info")

})