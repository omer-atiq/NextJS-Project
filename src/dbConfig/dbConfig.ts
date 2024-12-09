import mongoose from "mongoose";
import mongoosefro from "mongoose";

export async function connect(){
    try{
        mongoose.connect(process.env.MONGO_URI!);
        const connection = mongoose.connection;

        connection.on('connected', () => {
            console.log('MongoDb connected succesfully');

        })

        connection.on('error', (err) => {
            console.log('MongoDb error' +err);
            process.exit();

        })


        
    }
    catch(error){
        console.log('Something went wrong');
        console.log(error);

    }
    

}