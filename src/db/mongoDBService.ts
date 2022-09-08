import * as mongoDB from "mongodb";
import * as dotenv from "dotenv";
//import { instructor, postOne } from "../models/models";
import { DBService } from './dbService';
//import { TableTypes } from './tableNames';
import { injectable } from "inversify";
import { ObjectId } from "mongodb";
import { Role } from "../models/models";
import { TableTypes } from "./tableNames";


export const collections: { users?: mongoDB.Collection } = {}
@injectable()
export class MongoDBService implements DBService {
    
    public async connectToDatabase(): Promise<any> {
        dotenv.config();
        const client: mongoDB.MongoClient = new mongoDB.MongoClient(`${process.env.DB_CONN_STRING}`)
        await client.connect();
        const db: mongoDB.Db = client.db(process.env.DB_NAME);
        const userCollection: mongoDB.Collection = db.collection(`${process.env.DB_COLLECTION_NAME}`);
        collections.users = userCollection; 
        await console.log(`Successfully connected to database: ${db.databaseName} and collection: ${userCollection.collectionName}`);;
        
    }

    public async postOne(req: any) : Promise<any> {
        console.log(req) 
        const result = await collections.users?.insertOne(req);
        return(result)
    }

    public async getItem(value: any): Promise<any> {
        const getItem = (await collections.users?.findOne({"email":value})) ;
        return (getItem);
    }
    
}

