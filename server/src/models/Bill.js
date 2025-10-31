import mongoose from "mongoose"

const billSchema = new mongoose.Schema(
    {
    name: { type: String, required: true },
    dueDate: { type: Date, required: true },
    amount: { type: Number, required: true},
    },
    { timestamps: true }
)

const Bill = mongoose.model("Bill", billSchema);
export default Bill;