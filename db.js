const mongoose=require('mongoose');

const mongoURL='mongodb://127.0.0.1:27017/hotelData'

mongoose.connect(mongoURL,{
    //  useNewUrlParser:true,
    //  useUnifiedTopology:true
})

const db=mongoose.connection;

db.on('connected',()=>{
    console.log('connected to mongoDB server');
});
db.on('error',(err)=>{
    console.log("mongodb connectiion error",err);
});
db.on('disconnect',()=>{
    console.log("mongodb server disconnected");

});
module.exports=db;