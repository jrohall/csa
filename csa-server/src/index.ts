import "dotenv/config"; // allows server to read the '.env' file environment variables
import express, { urlencoded } from "express";
import cors from "cors";
import connectDB from "./config/db";
import {PORT, NODE_ENV, APP_ORIGIN} from "./constants/env";
import errorHandler from "./middleware/errorHandler";
import cookieParser from "cookie-parser";
import catchErrors from "./utils/catchErrors";
import { OK } from "./constants/http";
import locRoutes from './routes/loc.route';


const app = express();

app.use(express.json());
app.use(urlencoded({extended: true}));
app.use(
    cors({
        origin: APP_ORIGIN, // ensures that API is only being used from the same origin point (client)
        credentials: true
    })
)
app.use(cookieParser());
app.use('/api', locRoutes);

app.get("/", (req, res, next) => {
        res.status(OK).json({
            status: "healthy"
        });
});


app.get('/api/get-api-key', (req, res) => {
    res.json({ apiKey: process.env.GMAPS_API_KEY });
});

app.use(errorHandler);

app.listen(PORT, async() => {
    console.log(`Server started on port ${PORT} in ${NODE_ENV} mode`);
    await connectDB();
})
