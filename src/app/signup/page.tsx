"use client";

import Link from "next/link";
import React, { useEffect } from "react";
import { useRouter } from "next/navigation";
import axios, { Axios } from "axios";
import toast from "react-hot-toast";

export default function SignUpPage() {
    const router = useRouter();
    const [user, setUser] = React.useState({
        email: "",
        password: "",
        username: "",
    });

    const [buttonDisabled, setButtonDisabled] = React.useState(false);

    const [loading, setLoading]  = React.useState(false);

    const onSignup = async () => {
        try{
            setLoading(true);
          const response =await  axios.post("/api/users/signup", user);

          console.log("Signup success", response.data);
          router.push("/login")


        }
        catch(error: any){
            console.log("Signup failed",error.message);
            toast.error(error.message)

        } finally {
            setLoading(false)
        }
        
    }


    useEffect(() => {
        if(user.email.length > 0 && user.password.length >0 && user.username.length > 0){
setButtonDisabled(false);
        }else {
            setButtonDisabled(true); 
        }
    }, [user]);

    return (
        <div className="flex flex-col items-center justify-center min-h-screen py-2 text-4xl">
            <h1 className="text-center">{loading ? "Processing" : "Signup"}</h1>
            <hr />
            <label htmlFor="username">username</label>
            <input className="p-2 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:border-gray-600"
                id="username"
                type="text"
                value={user.username}
                onChange={(e) => setUser({ ...user, username: e.target.value })} placeholder="username"></input>

            <label htmlFor="email">email</label>
            <input className="p-2 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:border-gray-600"
                id="email"
                type="text"
                value={user.email}
                onChange={(e) => setUser({ ...user, email: e.target.value })} placeholder="email"></input>


            <label htmlFor="password">password</label>
            <input className="p-2 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:border-gray-600"
                id="password"
                type="password"
                value={user.password}
                onChange={(e) => setUser({ ...user, password: e.target.value })} placeholder="password"></input>

            <button onClick={onSignup} className="p-2 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:border-gray-600">
                {buttonDisabled ? "No Signup" : "Signup"}
            </button>

            <Link href="/login">Visti Login Page</Link>



        </div>
    )
}