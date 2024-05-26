const mongoose = require('mongoose')

mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true, 
  useUnifiedTopology: true
})

mongoose = require('mongoose') require("dotenv").config(); 
mongoose.connect(process.env.MONGO_URI) 
module.exports.Place = require("./places");