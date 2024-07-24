import mongoose, { Schema } from 'mongoose';
const LeadSchema = new Schema({
    email: { type: String },
    phone: { type: String },
    name: { type: String },
    query: { type: String },
    extra: { type: String },
}, { timestamps: true });
const Lead = mongoose.models.Lead || mongoose.model('Lead', LeadSchema);
export default Lead;
