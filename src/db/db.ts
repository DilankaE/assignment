import * as mongoDB from "mongodb";
import * as dotenv from "dotenv";



export const collections: { users?: mongoDB.Collection } = {}

export class DBConnect{
   public async  connectToDatabase () {
    dotenv.config();
    
    const client: mongoDB.MongoClient = new mongoDB.MongoClient(`${process.env.DB_CONN_STRING}`)
  
    await client.connect();
    
    const db: mongoDB.Db = client.db(process.env.DB_NAME);
   
    const userCollection: mongoDB.Collection = db.collection(`${process.env.DB_COLLECTION_NAME}`);
    collections.users = userCollection; 

    await console.log(`Successfully connected to database: ${db.databaseName} and collection: ${userCollection.collectionName}`);
  }

  public async  postOne(){

  }
  
}
      
        
 



 