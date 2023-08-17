import mongoose from 'mongoose';
import dotenv from 'dotenv';
dotenv.config();

const DBConnection = async () =>{
  
     
    // We have to do exception handling here as there are chances that ip address is wrong or server is down,etc.
    const DB_URI=`mongodb+srv://rishinchaudhuri13:rishin@cluster0.si1q9qv.mongodb.net/?retryWrites=true&w=majority`;
    console.log(DB_URI);
    try{
       await mongoose.connect(DB_URI,{useNewUrlParser: true});
       console.log("database connected successfully.");
    }catch(error){
        console.error("Errror while connecting to the database", error.message);
    }
}

export default DBConnection;