// Iteration #1
const {Schema, model} = require ("mongoose")

//How the DB structure will look like
const droneSchema = new Schema({
    name: String, 
    propellers: Number, 
    maxSpeed: Number,
},
{
    timestamps: true
  }
)

const DronesCollection = model("Drone", droneSchema)

module.exports = DronesCollection