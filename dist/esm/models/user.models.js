import mongoose from "mongoose";
const UserSchema = new mongoose.Schema({
    id: {
        type: String,
        default: () => new mongoose.Types.ObjectId().toString(),
        unique: true,
    },
    email: {
        type: String,
        required: [true, "Email is required!"],
        unique: true,
    },
    firstName: {
        type: String,
    },
    lastName: {
        type: String,
    },
    imageUrl: {
        type: String,
    },
    clerkUserId: {
        type: String,
        unique: true,
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
    updatedAt: {
        type: Date,
        default: Date.now,
    },
});
const User = mongoose.models.User || mongoose.model("User", UserSchema);
export default User;
