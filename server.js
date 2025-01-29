import app from "./app.js";


const PORT = process.env.PORT || 4000;

app.listen(PORT, () => {
    console.log(`Server started at PORT ${PORT}, access at http://localhost:${PORT}`);
})