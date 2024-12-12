import { NextRequest,NextResponse } from "next/server";
import User from "@/models/userModel";
import mongoose from "mongoose";
import { getDataFromToken } from "@/helpers/getDataFromToken";
import {connect} from "@/dbConfig/dbConfig";


connect()

export async function GET(req: NextRequest) {

    try{
        const userId = await getDataFromToken(req);

        const user = await User.findOne({_id: userId} ).select("-password");

        console.log(user)
        return NextResponse.json({message:"User not found", data: user})

    }
    catch(error:any){
        console.log(error.message)
        return NextResponse.json({error: error.message}, {status: 400});
    }


    return NextResponse.json({ message: 'This is a GET request' });
  }


