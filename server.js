const express = require('express')
const app = express()
const db=require('./db')
const Person=require('./models/Person')
const Menu =require('./models/menu')
const passport=require('./auth')
const BodyParser=require('body-parser');
app.use(BodyParser.json());


app.use(passport.initialize())
passportAuth=passport.authenticate('local' , {session:false})

app.get('/',  function (req, res) {
  res.send('Hello aditya ')
})
const personRoutes=require('./routes/personRoutes');//importing router
app.use('/person', personRoutes)//uusing router

const menuRoutes=require('./routes/menuRoutes');

app.use('/menu', menuRoutes)

app.listen(3000,()=>{
  console.log("listning on port 3000")
})  