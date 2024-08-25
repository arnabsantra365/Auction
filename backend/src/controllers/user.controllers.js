import {asynchandler} from "../utils/asynchandler.js";
import { ApiError } from "../utils/ApiError.js";
import {ApiResponse} from "../utils/ApiResponse.js";
import { user } from "../models/users.models.js";

const generateAccandRfr = async(userId)=>{
    try {
        const User=await user.findById(userId)
        const accessToken = User.generateAccessToken();
        const refreshToken = User.generateRefreshToken();
        User.refreshToken = refreshToken;
        User.save({validateBeforeSave:false})

        return {accessToken,refreshToken};
    } catch (error) {
        throw new ApiError(500,'Something went wrong');
    }
}

const regUser = asynchandler(async (req,res)=>{
    // res.status(200).json({ //to register the user
    //     message:"ok",
    // })


const {fullname,email,username,password} =req.body
console.log("email:-",email);
console.log("fullname:-",fullname);

if(fullname==="" || email==="" || username==="" || password===""){ //validation
    throw new ApiError(400,"field required")
}

const existedUser=await user.findOne({
    $or:[{username},{email}]
})

if(existedUser){
    throw new ApiError(409,"user already exist")
}

const User= await user.create({ //creating a new user in database
    fullname,
    email,
    password,
    username: username.toLowerCase(),
})

const createdUser = await user.findById(User._id).select( 
    // used to not send the password and refreshtoken as response
    "-password -refreshToken" 
)
if(!createdUser)
    {
        throw new ApiError(500,"Something wrong") //checking is user created or not
    }

return res.status(201).json(
    new ApiResponse(200, createdUser,"User registered") //sending the response of user created
)

})

const loginUser =asynchandler(async(req,res)=>{
const {email,username,password} =req.body
if(!(username || email)){
    throw new ApiError(400,"username and email required");
}
const User = await user.findOne({ //fin user by email or username
    $or: [{username},{email}]
})

if(!User){ //checking if user exists or not
    throw new ApiError(404,"user doesn't exist")
}

const isPassValid=await User.isPasswordCorrect (password);

if(!isPassValid){
    throw new ApiError(401,'Invalid password')
}

const {accessToken,refreshToken} = await generateAccandRfr(User._id);//get access and refresh token from the method called above

const logUser = await user.findById(User._id).select(" -password -refreshToken");

const options={
    httpOnly : true,
    secure :true
}
// console.log(res.cookie)
return res
    .status(200)
    .cookie("accessToken", accessToken, options)
    .cookie("refreshToken", refreshToken, options)
    .json(
        new ApiResponse(
            200, 
            {
                User: logUser, accessToken, refreshToken
            },
            "User logged In Successfully"
        )
    )
})

const logoutUser = asynchandler(async(req,res)=>{
    await user.findByIdAndUpdate(
        req.User._id,
        {
            $unset: {
                refreshToken: 1 // this removes the field from document
            }
        },{
                new : true
            }
        
    )
    const options={
        httpOnly : true,
        secure :false
    }
    return res.status(200)
    .clearCookie("accessToken", options)
    .clearCookie("refreshToken", options)
    .json(new ApiResponse(200,{},"User logged out"))
})
export{regUser,loginUser,logoutUser};