"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.User = exports.Project = exports.Lead = exports.ChatbotUi = exports.ChatbotInstance = void 0;
const chatbotInstance_models_1 = __importDefault(require("./models/chatbotInstance.models"));
exports.ChatbotInstance = chatbotInstance_models_1.default;
const chatbotUi_models_1 = __importDefault(require("./models/chatbotUi.models"));
exports.ChatbotUi = chatbotUi_models_1.default;
const leads_models_1 = __importDefault(require("./models/leads.models"));
exports.Lead = leads_models_1.default;
const project_models_1 = __importDefault(require("./models/project.models"));
exports.Project = project_models_1.default;
const user_models_1 = __importDefault(require("./models/user.models"));
exports.User = user_models_1.default;
