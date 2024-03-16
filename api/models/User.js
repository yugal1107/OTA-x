import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    username: { type: String },
    password: { type: String, required: true },
    role: { type: String, enum: ['user', 'admin', 'driver'], default: 'user' },
}, { timestamps: true });

const UserModel = mongoose.model("User", userSchema);

export { UserModel };
    