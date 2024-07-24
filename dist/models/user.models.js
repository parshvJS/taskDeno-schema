"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const UserSchema = new mongoose_1.default.Schema({
    id: {
        type: String,
        default: () => new mongoose_1.default.Types.ObjectId().toString(),
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
const User = mongoose_1.default.models.User || mongoose_1.default.model("User", UserSchema);
exports.default = User;
