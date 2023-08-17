import mongoose from "mongoose";

//For validating the data coming from the frontend we need to make a schema.

const fileSchema= new mongoose.Schema({

   path:{
       type:String,
       required:true,

   },
   name: {
    type:String,
    required:true,

  },
  downloadContent:{
      type:Number,
      required:true,
      default:0
  }

});

const File= mongoose.model('file',fileSchema);
// file is the name of the collection just as we give table name in sql.


export default File;