import db from "../config/db.js"

const Schema = db.Schema

const vehicleSchema = new Schema({
    plate:{
        type: String,
        required: true
    },
    model:{
        type: String,
        required: true
    },
    year:{
        type: Number,
        required: true
    },
    owner:{
        type: String,
        required: true
    },
    maintenances:{
        type: [Schema.Types.ObjectId],
        ref:"Maintenances",
        required: false
    }
})

const Vehicle = db.model("Vehicle", vehicleSchema)

export default Vehicle