
import { ObjectId } from "mongodb";


export enum Modules{
    IMAGE_PROCESSING='1',
    VOICE_REC='2',
    FACE_DETECT='3'
}
export enum Role{
    ADMIN = 'admin',
    INSTRUCTOR = 'instructor',
    STUDENT = 'student'

}
export interface admin {
    email?: string;
    name?: string;
    password: string;
      
  }

  export interface instructorReq {
    email: string;
    name: string;
    
    
  }
  export interface instructor extends instructorReq{
    password: string; 
    id?: ObjectId;
    role: Role;
    
  }

  export interface student {
    email: string;
    name: string;
    password: string;
    
  }

  export enum collectionName{
    users = "users"
 }
 export interface classCreate{
  className: String;
  module: Modules;
  nameList : String[];

 }
 
 export interface ClientLoginRequest{
  email: string;
  password: string;
}
export interface newClass extends classCreate{
  classPW: string;
}