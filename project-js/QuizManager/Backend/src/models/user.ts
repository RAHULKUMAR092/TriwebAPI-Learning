import mongoose from "mongoose";

const schema = mongoose.Schema;

// schema
const userSchema = new schema(
    {
        name: {
            type: String,
            required: true,
            // trim: true
        },
        email: {
            type: String,
            required: true,
            unique: true,
            trim: true,
            lowercase: true,
            index:true
        },
        password: {
            type: String,
            required: true
        }
    },{
        timestamps: true // Automatically manage createdAt and updatedAt fields
    }
);


const User = mongoose.model("User", userSchema);
//model

export default User;
