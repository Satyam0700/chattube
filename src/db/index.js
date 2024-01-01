import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";

const connectDB = async () => {
    try {
        const connect = await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`, {
            useUnifiedTopology: true,
            useNewUrlParser: true
        });
        console.log(`\n MongoDB connected !! DB HOST: ${connect.connection.host}`)
    } catch (error) {
        console.log("MONGODB connection error", error)
    }
};

export default connectDB;