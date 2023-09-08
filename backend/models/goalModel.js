import mongoose from "mongoose";

const goalSchema = mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: "User"
    },
    text: {
        type: "string",
        required: [true, 'please add a text value']
    }
}, {
    timestamps: true
}) 

const Goal = mongoose.model('goal', goalSchema); 
export default Goal;