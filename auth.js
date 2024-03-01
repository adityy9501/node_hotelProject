const passport =require('passport');
const localStrategy=require('passport-local').Strategy;
const Person = require('./models/Person')


// app.get('/', function (req, res) {
//   res.send('welcome to backend')
// })
// passportAuth=passport.authenticate('local' , {session:false})

passport.use(new localStrategy(async (USERNAME, password, done)=>{
  try{
    console.log("user credential " ,USERNAME , password);
    const user =await Person.findOne({username:USERNAME});
    if(!user){
      return done (null , false ,{message:"username dosent match"})

    }
    const isPassMatch=user.password===password ? true:false;
    if(isPassMatch){
      return done(null, user);
    
    }else{
      return done(null , false , {message:"invalid password"})
    }


  }catch(error){
    return done(error)

  }
}))
module.exports=passport