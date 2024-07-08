import mongoose from "mongoose";

const schema = mongoose.Schema;

// schema
const resultSchema = new schema(
    {
        userId: {
            type: mongoose.Types.ObjectId,
            required: true,
            // trim: true
        },
        quizId: {
            type: mongoose.Types.ObjectId,
            required: true,
            // unique: true,
            // trim: true,
            // lowercase: true,
            // index:true
        },
        score: {
            type: Number,
            required: true
        },
        total: {
            type: Number,
            required: true

        }
    }, {
    timestamps: true // Automatically manage createdAt and updatedAt fields
}
);


const Result = mongoose.model("User", resultSchema);
//model

export default Result;
