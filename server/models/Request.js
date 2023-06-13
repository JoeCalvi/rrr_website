import mongoose from "mongoose";

const Schema = mongoose.Schema;

export const RequestSchema = new Schema({
    name: { type: String, required: true },
    phone: { type: String, required: true },
    email: { type: String, required: true },
    description: { type: String, required: true },
    repair: { type: Boolean, default: false },
    replace: { type: Boolean, default: false },
    type: { type: String, default: "N/A" },
    color: { type: String, default: "N/A" },
    job: { type: String, default: "" }
})