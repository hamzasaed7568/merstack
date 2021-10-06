import mongoose from "mongoose"
import dotenv from "dotenv"
dotenv.config();
import colors from "colors"

const connectDB = async ()=>{
    try{
        const conn = await mongoose.connect(process.env.MONGO_URI ,{
            useNewUrlParser:true,
            useUnifiedTopology:true,
            useCreateIndex:true
        });
        console.log(`db connected on host ${conn.connection.host}`.cyan.underline)
    }
    catch(error)
    {
        console.log(`error ${error.message}`.red.bold.underline);
        process.exit(1);
    }
}
export default connectDB;