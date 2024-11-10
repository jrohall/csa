import mongoose from "mongoose";
import { MONGO_URI } from "../constants/env";

const connectDB = async () => {
    try {
        await mongoose.connect(MONGO_URI, {}).then(() => console.log("Connected to MongoDB"));
    } catch (err) {
        console.log("Could not connect to MongoDB:", err);
        process.exit(1);
    }
};

export default connectDB;