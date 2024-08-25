import mongoose from "mongoose";


const dbConnection = async()=>{
    try {
        const res= await mongoose.connect(`${process.env.MONGO_URL}`);
        console.log(`Database connected :${res}`)
    } catch (error) {
        console.log('Connection Failed',error);
        process.exit(1);
    }
}
export default dbConnection;