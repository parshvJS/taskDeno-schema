"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const chatBotInstance = new mongoose_1.default.Schema({
    chatbotId: {
        type: mongoose_1.default.Schema.Types.ObjectId,
        ref: "project"
    },
    instanceId: {
        type: String,
    },
    conversation: {
        type: [],
    },
    initial_variables: {
        type: [],
    },
    redirected: {
        type: Boolean,
        default: false
    },
    hitsToAi: {
        type: Number,
        default: 0
    },
});
const ChatbotInstance = mongoose_1.default.models.ChatbotInstance || mongoose_1.default.model("ChatbotInstance", chatBotInstance);
exports.default = ChatbotInstance;
