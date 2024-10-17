import Vehicle  from "../models/vehicle.js";
const store = async (req,res)=>{
    try{
        const content = await Vehicle.create(req.body)
        res.status(201).json(content)
    }catch(err){
        res.status(400).json(err)
    }
}

const index = async (req,res)=>{
    try{
        const connect = await Vehicle.find().exec()
        res.status(200).json(connect)
    }catch(err){
        console.log(err);
    }
}

const show = async (req,res)=>{
    try{
        const connect = await Vehicle.findById(req.params.id).exec()
        res.status(200).json(connect)
    }catch(err){
        console.log(err);
    }
}

const update = async (req,res)=>{
    try{
        const connect = await Vehicle.findByIdAndUpdate(req.params.id, req.body, {new: true}).exec()
        res.status(200).json(connect)
    }catch(err){
        console.log(err);
    }
}

const destroy = async (req,res)=>{
    try{
        const connect = await Vehicle.findByIdAndDelete(req.params.id).exec()
        res.status(200).json(connect)
    }catch(err){
        console.log(err);
    }
}

const maintenance = async (req,res)=>{
    try{
        const connect = await Vehicle.findByIdAndUpdate(req.params.id, req.body).exec()
        res.status(200).json(connect)
    }catch(err){
        console.log(err);
    }
}

export default {store, index, show, update, destroy, maintenance}