const mongoose = require('mongoose');
const NotesSchema = new mongoose.Schema({
   title :{
type: String,
   },
   description :{
    type: String,
    required: true
       },
       tag :{
        type: String,
           },
           date :{
            type: Date,
            default: Date.now
               },
});
module.exports = mongoose.model('user',NotesSchema);