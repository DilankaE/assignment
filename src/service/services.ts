
// Data Model Interfaces
import { generate } from 'generate-password';
import  { classCreate, ClientLoginRequest, instructor, instructorReq, newClass, Role } from "../models/models";
import {DBService} from "../db/dbService";
import {  inject, injectable } from 'inversify';
import { sign } from 'jsonwebtoken';

const secret =  'my@#$secret';

var passwordgen = generate({
  length: 10,
  numbers: true
  });
const expression: RegExp = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;



 @injectable()
 export class UserService {
    
    private db: DBService;
    //private validation: Validation = DIContainer.resolve<Validation>(Validation);

    constructor(
        @inject('MongoDBService') dbService: DBService
    ){
        this.db = dbService;
    }

    public async getInstructor(ins: instructorReq): Promise<any> {
      const email: string = ins.email;
      const checkEmail: boolean = expression.test(email); // true
      console.log('e-mail is ' + (checkEmail ? 'correct' : 'incorrect'));
      const insNew:instructor = {
        name: ins.name,
        password: passwordgen,
        email: ins.email,
        role: Role.INSTRUCTOR
      }
       const result = await this.db.postOne(insNew);
       console.log(result);
       if (result.acknowledged === true){
          console.log("data is passed ")
          return(insNew)
        }
       else
          console.log("Error in data posting")
      
    }

    public async classCreate(clsCreate: classCreate): Promise <any> {
      const classPW = passwordgen;
      const newClass:newClass = {
       classPW: classPW,
       className: clsCreate.className,
       module: clsCreate.module,
       nameList: clsCreate.nameList
     }
      await this.db.postOne(newClass);
      console.log(newClass)
      return(newClass)
    }

    public async loginService(login: ClientLoginRequest): Promise <any> {
      const email:string = login.email.toLocaleLowerCase().trim();
      const checkEmail: boolean = expression.test(email); // true
      console.log('e-mail is ' + (checkEmail ? 'correct' : 'incorrect'));

      const result = await this.db.getItem(email);
      console.log(result)
      //jwt token
      if (this.compareToString(result, login.password)) {
        const token = sign(
            {
                email: login.email,
                role: Role,
            },
            secret,
            { expiresIn: '6h' },
        );
        console.log(token)
    }
  }
    private compareToString(string1: string, string2: string): boolean {
      if (string1.length > 0 && string2.length > 0) {
        console.log("valid email")
          return string1 === string2;
      }
      else{
      console.log("invalid email")
      return false;
    }
  }
}
