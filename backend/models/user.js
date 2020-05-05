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
  projects:{
    type:Array,
    default : []
  },
  learn:{
    type:Array,
    default:[]
  }
})

module.exports = User = mongoose.model('users', UserSchema)