import mongoose from "mongoose";

const mongoUri = process.env.MONGODB_URI!;

if(!mongoUri){
    throw new Error("Algo salio mal con la conexion")
};

export async function connectDB():Promise <void>{
  try{
    await mongoose.connect(mongoUri)

    console.log("La base de datos fue exitosamente conectada")
    
  }catch(error){
    console.error(error)
    throw error
  }
};