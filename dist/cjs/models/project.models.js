"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const projectSchema = new mongoose_1.default.Schema({
    userId: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    nodes: {
        type: {
            type: Array,
            default: function () {
                return () => [{
                        id: 'start101',
                        type: 'startNode',
                        data: { label: 'Start' },
                        position: {
                            x: 518,
                            y: 246
                        },
                    }];
            }
        }
    },
    edges: {
        type: Array,
        default: []
    },
    variables: {
        type: {
            type: Array,
            default: ['user_name', 'user_location', 'user_contact_no']
        }
    },
    aiPrompts: {
        type: Array,
        default: []
    },
    aiModel: {
        type: String,
        default: "GPT-3.5"
    },
    scriptTag: {
        type: String,
    },
    isScriptTagAvailable: {
        type: Boolean,
        default: false
    },
    embedId: {
        type: Number
    }
}, { timestamps: true });
const Project = mongoose_1.default.models.Project || mongoose_1.default.model("Project", projectSchema);
exports.default = Project;
