import express, { Request, Response } from "express";
//import { ObjectId } from "mongodb";
import { collections, } from "./db";
import {instructor} from "../models/models";


export class DBService{
public async postOne(req: instructor, dbCollection:string):Promise<any>{
    console.log(req) 
    const result = await collections.users?.insertOne(req);
    return(result)
   
  }
}



