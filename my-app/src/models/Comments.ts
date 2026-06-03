

export const CommentsSchema = ({
    text: {
        type: String,
        required: true
    },

    createAt: {
        type:  Date,
        default: Date.now
    }
})