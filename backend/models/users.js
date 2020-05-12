const mongoose = require('mongoose')
const Schema = mongoose.Schema

// Create Schema
const UserSchema = new Schema({
  username:{
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  date: {
    type: Date,
    default: Date.now
  },
  projects:[{
    name:String,
    description : String,
    todo:[{content:String,id:Number}],
    doing:[{content:String,id:Number}],
    done:[{content:String,id:Number}]
  }],
  learn:[{
    name: String,
    description : String,
    todo:[{content:String,id:Number}],
    doing:[{content:String,id:Number}],
    done:[{content:String,id:Number}]
  }]
})

module.exports = User = mongoose.model('User', UserSchema)