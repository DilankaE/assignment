import { app } from "./app";
import * as dotenv from "dotenv";
import {  DBConnect } from "./db/db";



dotenv.config();
const port = process.env.PORT || 3000;
var DB = new DBConnect;
DB.connectToDatabase()
  .then(() => {

        app.listen(port, () => {
            console.log(`Server started at http://localhost:${port}`);
        });
    })
    .catch((error: Error) => {
        console.error("Database connection failed", error);
        process.exit();
    });