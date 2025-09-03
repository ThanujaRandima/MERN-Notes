import mongoose, { Schema } from "mongoose";

//1-create a schema
//2- model based on that schema

const noteSchema = new mongoose.Schema({
    title : {
        type: String,
        require: true
    },
    content : {
        type: String,
        require: true
    }
},
{timestamps : true} //it will provide created at and updated at times
)

const Note = mongoose.model("Note", noteSchema)

export default Note