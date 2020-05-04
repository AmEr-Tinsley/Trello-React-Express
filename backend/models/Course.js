const mongoose = require('mongoose')
const Schema = mongoose.Schema

// Create Schema
const CourseSchema = new Schema({
  name : {
        type : String
  },
  description : {
      type : String
  },
  Todo : [String],
  Doing : [String],
  Done : [String]

})

module.exports = Course = mongoose.model('course', CourseSchema)