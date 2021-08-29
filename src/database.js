import mongoose from "mongoose";

export async function connect(){
    try{
        await mongoose.connect('mongodb://localhost/Express-graphql-mongodb')
        console.log("Server connected");
    }
    catch(e){
        console.log('Something goes wrong');
        console.log(e);
    }
}