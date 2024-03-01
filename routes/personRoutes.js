// const { Router, response } = require('express');
const Person = require('../models/Person');
// const { trusted } = require('mongoose');


express=require('express');
router=express.Router();
router.post('/', async (req, res)=>{
    try{
      const data=req.body
      const personData = new Person(data);
      const response = await personData.save();
      console.log("data saved");
      res.status(200).json(response)
  
    }catch(err){
      console.log(err);
      res.status(500).json({error:"internal server error"});
    }
  })
router.get('/' , async (req,res)=>{
    try{
      const data = await Person.find();
      console.log("data fetched");
      res.status(200).json(data)
  
    }catch(err){
      console.log(err);
      res.status(500).json({error:"internal server error"});
    }
  
    }
  )
router.get('/:worktype' , async (req , res)=>{
  
    try{
        const worktype=req.params.worktype;
        // if(worktype="manager"||worktype=="chef"){
        const response= await Person.find({work:worktype});
        console.log("response fetched");
        res.status(200).json(response)
          // }else{
              // res.status(500).json({error:"invalid"})
          // }
        
      }catch(err){
          console.log(err);
          res.status(500).json({error:"internal server error"})

      }

})


router.put('/:id' , async (req,res)=>{
    try{
    const personID=req.params.id;
    const updatedPersonData=req.body;
    const response=await Person.findByIdAndUpdate(personID,updatedPersonData,{
        new:true,
        runValidators:true

    })
    if(!response){
        return res.status(404).json({error:"person not found"})
    }
    console.log("data updated"),
    res.status(200).json(response)
   }catch(error){
    console.log(error);
    res.status(500).json({error:"interanl server error"})
   }
})

router.delete('/:id' , async (req,res)=>{
    try{
        const personID=req.params.id;
        const response=await Person.findByIdAndDelete(personID);
        console.log("data deleted");
        res.status(200).json({message:'data deletedd successfully'})

    }catch(err){
        console.log(err);
        res.status(500).json({err:"internal server error"})
    }
})

module.exports=router