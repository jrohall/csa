import catchErrors from "../utils/catchErrors";
import { z } from "zod";
import LocModel from "../models/loc.model";
import { NOT_FOUND } from "../constants/http";

const locationSchema = z.object({
    name: z.string().min(1).max(100),
    address: z.string().min(1).max(100),
    description: z.string().max(1000),
    website: z.string().url().optional(),
    tags: z.array(z.string()).optional()
})

export const getLoc = catchErrors(
    async (req, res) => {
        // validate request
        const request = locationSchema.parse(req.body);
        // call service
        const loc = await LocModel.findOne({ name: request.name, address: request.address });
        if (!loc) {
            return res.status(NOT_FOUND).json({ message: "Location not found" });
        }
        // return response
        return res.json(loc);
});
