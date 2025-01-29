import express from 'express';
import dotenv from 'dotenv';

dotenv.config({ path: "./.env" });
const app = express();

// middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
    res.send("<h1>Welcome!!</h1>");
})

export default app;