// loc.route.ts
import { Router } from 'express';
import { createLoc } from '../services/loc.service';
import { getAllLocations } from "../services/loc.service";

const locRoutes = Router();

locRoutes.post("/loc", async (req, res, next) => {
    try {
        const newLoc = await createLoc(req.body);
        res.status(201).json(newLoc);
    } catch (error) {
        next(error); 
    }
});

locRoutes.get("/loc", async (req, res, next) => {
    try {
        const locations = await getAllLocations();
        res.status(200).json(locations);
    } catch (error) {
        next(error); 
    }
});


export default locRoutes;
