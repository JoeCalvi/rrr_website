import mongoose from "mongoose";

const Schema = mongoose.Schema;

export const UserSchema = new Schema({
    firstName: { type: String },
    lastName: { type: String },
    userName: { type: String }
})