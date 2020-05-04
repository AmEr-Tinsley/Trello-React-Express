const mongoose = require('mongoose')
const Schema = mongoose.Schema

// Create Schema
const ProjectSchema = new Schema({
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

module.exports = Project = mongoose.model('project', ProjectSchema)