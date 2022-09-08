import { app } from "./app";
import * as dotenv from "dotenv";
import   {DBService}  from "./db/dbService";
import { MongoDBService } from "./db/mongoDBService";
import { table } from "console";
import { TableTypes } from "./db/tableNames";


dotenv.config();
const port = process.env.PORT || 3000;
const db:DBService = new MongoDBService();
db.connectToDatabase()
  .then(() => {
        app.listen(port, () => {
            console.log(`Server started at http://localhost:${port}`);
        });
    })
    .catch((error: Error) => {
        console.error("Database connection failed", error);
        process.exit();
    });