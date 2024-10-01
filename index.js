const express = require("express");
const app = express();
require("dotenv").config();
const PORT = process.env.PORT;
const connectdb = require("./config/connectdb");
const RoutesUser = require("./routtes/routeuser");
const RoutesProduct = require("./routtes/routeprouduct");
const cors = require("cors");
const cookieParser = require('cookie-parser');

const allowedOrigins = ['https://frond-end-delta.vercel.app'];

const corsOptions = {
  origin: function (origin, callback) {
    console.log('Origin:', origin); // Debugging line
    if (allowedOrigins.includes(origin) || !origin) {
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  },
  credentials: true,
};

// Apply CORS middleware
app.use(cors(corsOptions));

connectdb();
app.use(cookieParser());
app.use(express.json());
app.use("/uploads", express.static(__dirname + "/uploads"));

// Routes
app.use('/api/user', RoutesUser);
app.use('/api/product', RoutesProduct);

app.use(function(req, res) {
   res.status(404).send('not found!');
});

app.listen(PORT, (err) => {
    err ? console.log(err) : console.log("server is running");
});
