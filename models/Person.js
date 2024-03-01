const mongoose=require('mongoose');

// define person schema 
const personschema= new mongoose.Schema({
    name:{
        type:String,
        required:true

    },
    age:{
        type:String
    },
    email:{
        type:String,
        unique:true
    },
    work:{
        enum:["manager " , "waiter" , "chef"]
    },
    username:{
        require:true,
        type:String
    },
    password:{
        require:true,
        type:String
    }

})
const Person=mongoose.model('Person', personschema);
module.exports=Person;