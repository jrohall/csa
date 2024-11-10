import LocModel from "../models/loc.model";

export type LocParams = {
    name: string;
    address: string;
    description?: string;
    website?: string;
    tags?: string[];
}

export const createLoc = async (data: LocParams) => {
    // verify that location does not already exist
    const existingLoc = await LocModel.exists({ name: data.name, address: data.address });
    if (existingLoc) {
        throw new Error("Location already exists");
    }
    // create new location
    const newLoc = await LocModel.create({
        name: data.name,
        address: data.address,
        description: data.description,
        website: data.website,
        tags: data.tags
    });
    // return new location
    return newLoc;
}
