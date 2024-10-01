const express=require("express")  
const app=express()

require("dotenv").config()
const port=process.env.PORT
const connectdb=require("./config/connectdb")
const RoutesUser=require("./routtes/routeuser")
const RoutesProduct=require("./routtes/routeprouduct")
const cors = require("cors");

var cookieParser = require('cookie-parser')


const corsOptions = {
   origin: '*',
   credentials: true,
   optionSuccessStatus: 200,
}

connectdb()
app.use(cookieParser())
app.use(cors(corsOptions))
app.use(express.json())
app.use("/uploads",express.static(__dirname+"/uploads"))

//Routes
app.use('/api/user',RoutesUser)
app.use('/api/product',RoutesProduct)

app.use(function(req, res, ){
   res.status(404).send('not found!')})

app.listen(port,(err)=>{
    err ? console.log(err):
    console.log("server is running");
})




