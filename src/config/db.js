const mongoose = require("mongoose");

const connectDB = async () => {
    try{
         mongoose.connect(process.env.MONGO_URI);
         console.log("DB connected Successfully");
    }
    catch(err){
       console.error("Database connection error",err.message);
       process.exit(1); 
    }
    
};
module.exports= connectDB;