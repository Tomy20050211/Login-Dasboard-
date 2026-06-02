import mongoose, {Schema} from "mongoose";

export const UserSchema = new Schema ({
    
     email: {
        type: String,
        required: true,
        unique: true
    }, 
    password: {
        type: String,
        required: true,
        
    }
});

export default mongoose.models.UsersDB || mongoose.model("UsersDB", UserSchema);