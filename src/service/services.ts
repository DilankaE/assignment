
// Data Model Interfaces
import { generate } from 'generate-password';
import  {  collectionName, instructor, instructorReq } from "../models/models";
import {DBService} from "../db/dbService";


var passwordgen = generate({
  length: 10,
  numbers: true
  });
  
 export class UserService {

    public async getInstructor(ins: instructorReq): Promise<any> {

      const insNew = {name: ins.name,
          password : passwordgen,
          email : ins.email }

       const result  =  await new DBService().postOne(insNew, collectionName.users);
       console.log(result);
        
       if (result.acknowledged === true)
          {console.log("data is passed ")
          return(insNew)}
       else
          console.log("Error in data posting")
      
    }

}




