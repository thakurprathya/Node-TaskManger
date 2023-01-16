const mongoose = require('mongoose');

//schemas our userdefined structures for database collection as mongoDB noSQL db it doesn't have any predefined structure
//models are fancy structures compiled from schema definations, instance of model is called a document, they are responsible for creating and reading documents from database.
//we have provided validation to our schema, for further validation props refer mongoose docs-> validation.
const TaskSchema = new mongoose.Schema({
    name: {
      type: String,
      required: [true, 'must provide name'],
      trim: true,
      maxlength: [20, 'name can not be more than 20 characters'],
    },
    completed: {
      type: Boolean,
      default: false,
    },
  })
  
  module.exports = mongoose.model('Task', TaskSchema)