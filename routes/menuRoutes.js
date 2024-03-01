const express=require('express');
const router=express.Router();
router.post('/', async (req,res)=>{
    try{
      const data=req.body;
      const newMenu=new Menu(data);
      const response=await newMenu.save();
      console.log("data saved");
      res.status(200).json(response);
    }catch(err){
      console.log(err);
      res.status(500).json({err:"internal servrer error"})    
    }
  })

module.exports=router;