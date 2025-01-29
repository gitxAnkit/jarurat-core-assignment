import mongoose from "mongoose";
import validator from "validator";

const donationSchema = new mongoose.Schema({
    donarName: {
        type: String,
        required: [true, "Donar Name is required."],
    },
    email: {
        type: String,
        required: [true, "Email is required."],
        unique: true,
        validate: [validator.isEmail, "Enter a valid email"],
    },
    amount: {
        type: Number,
        required: [true, "Donation amount is required."],
        min: [1, "Donation amount should be greater than 0"]
    },
    paymentMethod: {
        type: String,
        required: true,
        enum: ["cash", "upi", "cheque", "imps", "neft"]
    }
}, { timestamps: true });
export const Donation = mongoose.model("Donations", donationSchema);