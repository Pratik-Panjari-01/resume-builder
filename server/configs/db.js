import mongoose from "mongoose";

const connectDB = async () =>
{
    try
    {
        mongoose.connection.on('connected',()=>
        {
            console.log("Database connected successfully");
        })

        let mongoDB_URI = process.env.MONGODB_URI;
        const projectName = "resume-builder";

        if(!mongoDB_URI)
        {
            throw new Error("MONGODB_URI environment variable is not set");
        }

        if(mongoDB_URI.endsWith("/"))
        {
            mongoDB_URI = mongoDB_URI.slice(0,-1);
        }

        await mongoose.connect(`${mongoDB_URI}/${projectName}`)
    }
    catch (error)
    {
        console.error("Error connecting to the MongoDB:", error);
    }
}

export default connectDB;