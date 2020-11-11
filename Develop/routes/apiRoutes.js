  
const db = require("../models");
var express = require("express");
var router = express.Router();

router.get("/api/workouts",(req,res)=>{
db.Workout.find({})
.sort({ day: -1 })
.then(dbWorkout => {
  res.json(dbWorkout);
})
.catch(err => {
  res.status(400).json(err);
});
});
router.post("/api/workouts",({body},res)=>{
console.log(body);
    db.Workout.create({body})
    .then(dbWorkout=>{
        res.json(dbWorkout);
    }).catch(err => {
        res.status(400).json(err);
      });
    });

router.put("/api/workouts/:id",(req,res)=>{
db.Workout.findByIdAndUpdate({_id: req.params.id}, {
  $set: {
    exercises: req.body 
  }
}).then(function(dbWorkout){
  res.json(dbWorkout); 
}).catch(err => {
  res.status(400).json(err);
});
});

router.get("/api/workouts/range",(_req,res)=>{
    db.Workout.find({})
    .sort({ day: -1 })
    .then(dbWorkout => {
      res.json(dbWorkout);
    })
    .catch(err => {
      res.status(400).json(err);
    });
});


module.exports=router;