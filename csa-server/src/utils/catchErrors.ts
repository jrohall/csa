import { NextFunction, Response, Request } from "express";

type AsyncController = (req: Request, res: Response, next: NextFunction) => Promise<any>;

// it is essential to handle errors in the try block, otherwise mongo will crash the server
// this function automatically adds any async function wrapped in it to catch errors properly
const catchErrors = (controller: AsyncController): AsyncController => 
async (req, res, next) => {
    try {
        await controller(req, res, next);
    } catch (err) {
        next(err);
    }
}
    
export default catchErrors;