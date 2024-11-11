import mongoose, { Schema, Document } from 'mongoose';

export interface ILoc extends Document {
    name: string;
    address: object;
    description?: string;
    website?: string;
    tags?: string[];
}

const LocSchema: Schema = new Schema({
    name: { type: String, required: true, unique: true },
    address: { type: Object, required: true },
    description: { type: String },
    website: { type: String },
    tags: { type: [String] }
});

const LocModel = mongoose.model<ILoc>('Location', LocSchema);

export default LocModel;