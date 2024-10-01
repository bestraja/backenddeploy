const express=require("express")  
const app=express()

require("dotenv").config()
const PORT=process.env.PORT
const connectdb=require("./config/connectdb")
const RoutesUser=require("./routtes/routeuser")
const RoutesProduct=require("./routtes/routeprouduct")
const cors = require("cors");

var cookieParser = require('cookie-parser')


//const corsOptions = {
  /////  origin: 'https://client-jade-chi.vercel.app/', 
   // methods: ['GET', 'POST', 'PUT', 'DELETE'], 
   // allowedHeaders: ['Content-Type', 'Authorization'], 
  //  credentials: true, 
  //};
  const allowedOrigins = ['https://frond-end-delta.vercel.app/'];

  const corsOptions = {
    origin: function (origin, callback) {
      if (allowedOrigins.includes(origin) || !origin) {
        callback(null, true);
      } else {
        callback(new Error('Not allowed by CORS'));
      }
    },
    credentials: true,  // Si vous travaillez avec des cookies ou des sessions
  };

  app.use(cors(corsOptions));


//app.use(cors(corsOptions))

app.options('', cors(corsOptions));

connectdb()
app.use(cookieParser())
app.use(express.json())
app.use("/uploads",express.static(__dirname+"/uploads"))

//Routes
app.use('/api/user',RoutesUser)
app.use('/api/product',RoutesProduct)

app.use(function(req, res, ){
   res.status(404).send('not found!')})

app.listen(PORT,(err)=>{
    err ? console.log(err):
    console.log("server is running");
})




