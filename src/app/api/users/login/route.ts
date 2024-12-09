import {connect} from "@/dbConfig/dbConfig";
import User from "@/models/userModel";
import { NextRequest, NextResponse } from "next/server";
import bcryptjs from "bcryptjs";
import { use } from "react";
import jwt from "jsonwebtoken";


connect()


export async function POST(request:NextRequest) {
try{
    const reqBody = await request.json()
    const {email, password} = reqBody

    console.log(reqBody)

    //check if user already exists
    const user = await User.findOne({email})
    // const user = await User.findOne(email);

    if(!user){
        return NextResponse.json({error: "User does not exists"}, {status: 300})
    }
    
    // hash passwrod
    const validPassword = (password === user.password) ? true : false;

    if(!validPassword){
        return NextResponse.json({error: "Username or password is incoorect"}, {status: 800})
    }


    //create token data
    const tokenData = { id: user._id,
        username: user.username,
        email: user.email
    }

    console.log(tokenData)

    // create token
    const token = await jwt.sign(tokenData, process.env.TOKEN_SECRET!, {expiresIn: "1d"})
    console.log(token)

const response  = NextResponse.json({
    message: "Login Successful",
    success: true,
});

response.cookies.set("token",token,{
    httpOnly: true,
    
})

return response;


}
catch(error: any){

    console.log("Error in POST handler:", error.message);
    return NextResponse.json({error: error.message}, {status: 500})


}

    
}