import express from 'express';
import router from "./routes/routes.js";
import cors from "cors";
import DBConnection from "./database/db.js"
// in backend we have to alwats write the extension.
//In frontend we can choose to avoid .
const app=express();
app.use(cors());// enabling cors so that we dont get an error.
app.use('/',router);// Whenever it hits the root.

const PORT=8000;

DBConnection();

app.listen(PORT,() =>{console.log(`Server running on port ${PORT}`)});