import { ErrorRequestHandler, Response } from "express";
import { INTERNAL_SERVER_ERROR, BAD_REQUEST } from "../constants/http";
import { z } from "zod";

const handleZodError = (err: z.ZodError, res: Response) => {
    const errors = err.issues.map((err) => ({
        path: err.path.join("."),
        message: err.message,
    }));
    return res.status(BAD_REQUEST).json({
        message:err.message,
        errors,
    });
}

const errorHandler: ErrorRequestHandler = (err, req, res, next) => {
    console.log(`Path: ${req.path}, Error: ${err.message}`);
    if (err instanceof z.ZodError) {
        handleZodError(err, res);
    }
    res.status(INTERNAL_SERVER_ERROR).send("Internal Server Error");
}

export default errorHandler;