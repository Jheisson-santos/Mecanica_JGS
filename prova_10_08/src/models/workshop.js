import db from "../config/db.js"

const Schema = db.Schema

const workshopSchema = new Schema({
    name:{
        type: String,
        required: true
    },
    adress:{
        type: Object,
        required: true
    },
    specialties:{
        type: [String],
        required: true
    }
})

const Workshop = db.model("Workshop", workshopSchema)

export default Workshop