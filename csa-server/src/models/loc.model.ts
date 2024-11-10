import mongoose from "mongoose";

export interface LocDocument extends mongoose.Document {
    name: string;
    address: string;
    description?: string;
    website?: string;
    tags?: string[];
}

const locSchema = new mongoose.Schema<LocDocument>({
    name: String,
    address: String,
    description: String,
    website: String,
    tags: [String]
})

locSchema.pre("save", async function (next) {
    if(!this.isModified("name") && !this.isModified("address")) {
        next();
    }
})

locSchema.methods.compareAddress = function (address: string) {
    return this.address.toLowerCase() === address.toLowerCase();
}

const LocModel = mongoose.model<LocDocument>("Loc", locSchema);
export default LocModel;