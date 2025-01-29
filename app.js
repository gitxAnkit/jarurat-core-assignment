import express from 'express';
import dotenv from 'dotenv';
import { connectDB } from './config/mongoConnection.js';
import donationRoute from './routes/donationRoutes.js';
import userRoute from './routes/userRoutes.js';
import errorMiddleware from './middleware/error.js';
import cookieParser from 'cookie-parser';
dotenv.config({ path: "./.env" });
const app = express();

// MongoDB connection
connectDB();

// middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser())

// Routes
app.use("/api/v1", donationRoute);
app.use("/api/v1", userRoute);
app.get("/", (req, res) => {
    res.send("<h1>Welcome!!</h1>");
})
// error middleware
app.use(errorMiddleware);
export default app;