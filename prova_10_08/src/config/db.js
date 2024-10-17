import mongoose from "mongoose";

const connect = async ()=>{
    try{
        await mongoose.connect(`mongodb+srv://${process.env.NAME_DB}:${process.env.PASS_DB}@${process.env.CLUSTER_DB}/${process.env.DOC_NAME}`)
        console.log("Conectado ao mongoDB")

    }catch(err){
        console.log(err);
    }
}

connect()

export default mongoose