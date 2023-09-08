import mongoose from "mongoose";

const goalSchema = mongoose.Schema({
    text: {
        type: "string",
        required: [true, 'please add a text value']
    }
}, {
    timestamps: true
}) 

const Goal = mongoose.model('goal', goalSchema); 
export default Goal;