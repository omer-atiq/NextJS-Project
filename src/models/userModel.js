import mongoose from "mongoose"


const userSchema = new mongoose.Schema({
    username:{
        type: String,
        required: [true, "Palease provide a username"],
        unique: true

    },
    email:{
        type: String,
        required: [true, "Palease provide a email"],
        unique: true

    },
    password:{
        type: String,
        required: [true, "Please provide a pasword"],

    },
    role:{
        type: String,
        required: false,
    },
    isAdmin:{
        type: Boolean,
        default: false
    },
    forgotPasswordToken: String,
    forgotPasswordTokenExpiry: Date,
    verifyToken:String,
    verifyTokenExpiry:String

});



const User = mongoose.models.users || mongoose.model("users", userSchema);

export default User;


