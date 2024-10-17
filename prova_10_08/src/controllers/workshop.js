import Workshop  from "../models/workshop.js";

const store = async (req,res)=>{
    try{
        const content = await Workshop.create(req.body)
        res.status(201).json(content)
    }catch(err){
        res.status(400).json(err)
    }
}

const index = async (req,res)=>{
    try{
        const connect = await Workshop.find().exec()
        res.status(200).json(connect)
    }catch(err){
        console.log(err);
    }
}

const show = async (req,res)=>{
    try{
        const connect = await Workshop.findById(req.params.id).exec()
        res.status(200).json(connect)
    }catch(err){
        console.log(err);
    }
}

const update = async (req,res)=>{
    try{
        const connect = await Workshop.findByIdAndUpdate(req.params.id, req.body, {new: true}).exec()
        res.status(200).json(connect)
    }catch(err){
        console.log(err);
    }
}

const destroy = async (req,res)=>{
    try{
        const connect = await Workshop.findByIdAndDelete(req.params.id).exec()
        res.status(200).json(connect)
    }catch(err){
        console.log(err);
    }
}

export default {store, index, show, update, destroy}