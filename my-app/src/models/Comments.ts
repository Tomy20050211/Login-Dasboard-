import mongoose, {Schema} from "mongoose"

export const CommentsSchema = new Schema({
    text: {
        type: String,
        required: true
    },

    createAt: {
        type:  Date,
        default: Date.now
    }
})

export  default mongoose.models.Comment || mongoose.model("Comment", CommentsSchema)