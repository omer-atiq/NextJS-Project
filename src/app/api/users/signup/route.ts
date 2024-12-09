import {connect} from "@/dbConfig/dbConfig";
import User from "@/models/userModel";
import { NextRequest, NextResponse } from "next/server";
import bcryptjs from "bcryptjs";


connect()


export async function POST(request:NextRequest) {
try{
    const reqBody = await request.json()
    const {username, email, password} = reqBody
3
    // console.log(reqBody)

    //check if user already exists
    const user = await User.findOne({email})
    // const user = await User.findOne(email);

    if(user){
        return NextResponse.json({error: "User already exists"}, {status: 400})
    }
    
    // hash passwrod
    const salt = await bcryptjs.genSalt(10)
    const hashedPassword  = await bcryptjs.hash(password, salt)

   const newUser = new User({
        username,
        email,
        password: password
    })

   const saveUser =  await newUser.save()

//    console.log(saveUser)

   return NextResponse.json({
    message: "USER CREATED SUCCESSFULLY",
    success: true,
    saveUser
});




}
catch(error: any){

    // console.error("Error in POST handler:", error.message);
    return NextResponse.json({error: error.message}, {status: 500})


}

    
}