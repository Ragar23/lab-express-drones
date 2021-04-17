const express = require('express');
const router = express.Router();

// require the Drone model here

const DronesCollection = require("../models/Drone.model")

//---READ ROUTES---//
router.get('/drones', (req, res, next) => {
  // Iteration #2: List the drones
  //1. Get the elements from the DB using .find()
  DronesCollection.find()
  .then((allDrones) => { //allDrones --> thats the element and it need to be passed on 15 as an object
    console.log(allDrones);
    res.render("drones/list.hbs", { allDrones }) //don't put the first / when using .render
  })
  
});

router.get('/drones/create', (req, res, next) => {
  // Iteration #3: Add a new drone
  res.render("drones/create-form.hbs") //rendering the view of the form in the user
});

router.post('/drones/create', (req, res, next) => {
  // Iteration #3: Add a new drone
  const { name, propellers, maxSpeed} = req.body
  console.log(req.body)

  DronesCollection.create({name, propellers, maxSpeed}) //this is a promise 
  .then(()=>{
    res.redirect("/drones") //to redirect to another page after adding a new element
  })

  .catch(()=>{
    res.redirect("/drones/create") //possible option when there is an error. NOT SURE
  })

});

router.get('/drones/:id/edit', (req, res, next) => {
  // Iteration #4: Update the drone
  const {id} = req.params 

  DronesCollection.findById(id)
  .then((data)=>{
    res.render("drones/update-form.hbs", {data}) //rendering the page to the user

  })

});

router.post('/drones/:id/edit', (req, res, next) => {
  // Iteration #4: Update the drone
  const {id} = req.params 

  const {name, propellers, maxSpeed } = req.body

  DronesCollection.findByIdAndUpdate(id, {name, propellers, maxSpeed }) //its a promise 
  .then((data)=>{
    res.redirect("/drones")
  })

  .catch((err)=>{
    console.log("where is the error")
  })
  
});

router.post('/drones/:id/delete', (req, res, next) => {
  // Iteration #5: Delete the drone
  // ... your code here
});

module.exports = router;
