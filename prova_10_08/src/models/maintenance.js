import db from "../config/db.js"

const Schema = db.Schema

const maintenancesSchema = new Schema({
    workshop:{
        type: Schema.Types.ObjectId,
        ref: "Workshop",
        required: true
    },
    vehicle:{
        type: Schema.Types.ObjectId,
        ref:"Vehicle",
        required: true
    },
    services:{
        type: [Object],
        required: true
    },
    date:{
        type: Date,
        required: true
    },
    totalCost:{
        type: Number,
        required: true
    }
})

const Maintenances = db.model("Maintenances", maintenancesSchema)

export default Maintenances