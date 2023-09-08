console.log("hello world!");
import colors from 'colors'
import express from "express";
import { connectDB } from './config/db.js';
import dotenv from "dotenv";
import goalRoutes from "./routes/goalRoutes.js"
import { errorHandler } from "./middleware/errorMiddleware.js";

dotenv.config()
connectDB()

const app = express();
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use('/api/goals/', goalRoutes)
app.use(errorHandler);

// Routes


const PORT = process.env.PORT || 9002

app.listen(PORT, () => console.log(`Server is runing at PORT ${PORT}`));
