import { instructor } from "../models/models";
import { TableTypes } from "./tableNames";

export interface DBService {
    connectToDatabase(): Promise<any>;
    postOne(req: any) : Promise<any> ;
    getItem(value: any): Promise<any>;
    

}
