"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const constant_1 = require("../constant");
// // 1. chatbot open button logo
// 2. chatbot home logo
// 3. color theme
// 4. margin b and r
// 5. chatbot name
// 6. rounded themes 
// 7. width of panel
const chatbotCustomUi = new mongoose_1.default.Schema({
    projectId: {
        type: mongoose_1.default.Schema.Types.ObjectId,
        ref: "project"
    },
    marginBottom: {
        type: Number,
        default: 30
    },
    marginRight: {
        type: Number,
        default: 30
    },
    chatbotName: {
        type: String,
        default: "Task Deno | Filora"
    },
    roundedTheme: {
        type: Number,
        default: 10
    },
    panelWidth: {
        type: Number,
        default: 400
    },
    chatbotLargeLogo: {
        type: String,
        default: "https://dstal.com.au/wp-content/uploads/2021/09/logoipsum-768x360.png"
    },
    chatbotSmallLogo: {
        type: String,
        default: "https://img.icons8.com/?size=100&id=7859&format=png&color=FFFFFF"
    },
    colorTheme: {
        type: String,
        default: "#eeff00"
    },
    welcomText: {
        type: String,
        default: "Hello! How can I help you today?"
    },
    faq: {
        type: [],
        default: constant_1.defaultFaq
    },
    contact: {
        type: [],
        default: []
    }
});
const ChatbotUi = mongoose_1.default.models.ChatbotUi || mongoose_1.default.model("ChatbotUi", chatbotCustomUi);
exports.default = ChatbotUi;
