const mongoose = require('mongoose');

const MineSchema = mongoose.Schema({
  title: {
   type: String,
   required: true,
  },
  bookmarkLink: {
    type: String, 
    required: true,
   },
  body: String, // changed this from "object" to string(working)
  notes:[
    {
      
      title: String,
      link: String,
      note: String
    }
  ],
  author: String,
  mineStatus: String,
},
  { timestamps:true }
);

module.exports = mongoose.model('Mine', MineSchema);


 