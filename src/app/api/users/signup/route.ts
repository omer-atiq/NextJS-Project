"use clinet";
import Link from "next/link";
import React from "react";
import { useRouter } from "next/navigation";
import { Axios } from "axios";




export default function SignUpPage() {
const[user, setUser] = React.useState({
email:"",
password:"",
username:"",
});


const onSignup = async () = {

}

    return (
        <div className="flex flex-col items-center justify-center min-h-screen py-2">
            <h1 className="text-center">SignUp</h1>
        </div>
    )
}s