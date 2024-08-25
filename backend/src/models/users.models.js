import mongoose from "mongoose";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";

const userSchema = new mongoose.Schema({
    username:{
        type:String,
        required:true,
        unique:true,
        lowercase:true
    },
    fullname:{
        type:String,
        required:true,
        unique:true,
        lowercase:true
    },
    email:{
        type:String,
        required:true,
        unique:true,
        lowercase:true
    },
    password:{
        type:String,
        required:[true,'Pass is req'],
    },
    refreshToken:{
        type:String,
    }
},{timestamps:true})

//userSchema.pre("save", ()=>{}) wrong way because we need refernce of the above in constructor .pre is a middleware used 
// as a check before the event is happening.
userSchema.pre("save",async function(next){
    if(!this.isModified("password")) return next();//check only when pass is modified else move forward

    this.password=await bcrypt.hash(this.password,10); //hash pass
    next()
} )

userSchema.methods.isPasswordCorrect = async function(password){
    return await bcrypt.compare(password,this.password); //compare the pass and hashed pass and return true or false
}
//access and refresh token
userSchema.methods.generateAccessToken= function () {
    return jwt.sign(
        {
            _id: this._id,
            email: this.email,
            username: this.username,
            fullname: this.fullname
        },
        process.env.ACCESS_TOKEN,
        {
            expiresIn: process.env.ACCESS_TOKEN_EXPIRY
        }
    )
}
userSchema.methods.generateRefreshToken= function () {
    return jwt.sign(
        {
            _id: this._id,
        },
        process.env.REFRESH_TOKEN,
        {
            expiresIn: process.env.REFRESH_TOKEN_EXPIRY
        }
    )
}


export const user = mongoose.model("user",userSchema);