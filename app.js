import express from 'express';
import dotenv from 'dotenv';
import { connectDB } from './config/mongoConnection.js';
import donationRoute from './routes/donationRoutes.js';

dotenv.config({ path: "./.env" });
const app = express();

// MongoDB connection
connectDB();

// middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes
app.use("/api/v1", donationRoute);
app.get("/", (req, res) => {
    res.send("<h1>Welcome!!</h1>");
})

export default app;