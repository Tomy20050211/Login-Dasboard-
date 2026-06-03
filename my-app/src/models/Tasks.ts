import mongoose, { Schema } from "mongoose";
import { CommentsSchema } from "./Comments";

export const TasksSchema = new Schema({
    title: {
        type: String,
        required: true,
    },
   
    completed: {
        type: Boolean
    },
   

    userId: {
        type: Schema.Types.ObjectId,
        ref: "User"
    },

    comments: [CommentsSchema]
 
});


export default mongoose.models.Tasks || mongoose.model("Tasks", TasksSchema)