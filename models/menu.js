const mongoose=require('mongoose')

const menuschema=new mongoose.Schema({
    name:{
        type:String,
        require:true

    },
    isdrink:{
        type:Boolean
    },
    price:{
        type:String
    }
})
const Menu= mongoose.model('Menu' , menuschema);
module.exports=Menu