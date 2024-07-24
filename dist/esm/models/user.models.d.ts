import { Document, Model } from "mongoose";
export interface User extends Document {
    id: string;
    email: string;
    firstName?: string;
    lastName?: string;
    imageUrl?: string;
    clerkUserId?: string;
    createdAt: Date;
    updatedAt: Date;
}
declare const User: Model<User>;
export default User;
