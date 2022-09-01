
import { ObjectId } from "mongodb";


export enum Modules{
    IMAGE_PROCESSING,
    VOICE_REC,
    FACE_DETECT
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
    id?: ObjectId
  }

  export interface student {
    email: string;
    name?: string;
    password: string;
    
  }

  export enum collectionName{
    users = "users"
}

 
 
