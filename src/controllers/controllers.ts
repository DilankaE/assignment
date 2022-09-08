import {
    Body,
    Controller,
    Post,
    Route,
    Security,
    Tags,
  } from "tsoa";
import { classCreate, ClientLoginRequest, instructorReq } from "../models/models";
import { UserService } from "../service/services";
import { DIContainer } from '../util/di-container';
import 'reflect-metadata';


@Route("endpoints")
export class UserControllers extends Controller{ 

   private UserService: UserService = DIContainer.resolve<UserService>(UserService);
    @Post('instructor_create')
    @Tags('instructor_create')
    public async instructorCreate(
        @Body() request: instructorReq
    ): Promise<any> {
        this.setStatus(201); 
         
        const instrctr = this.UserService.getInstructor(request);
        return instrctr;
    }


    @Post('class_create')
    @Tags('class_create')
    public async classCreate(
        @Body() request: classCreate
    ): Promise<any> {
        this.setStatus(201);
         
        const classCreatePW = this.UserService.classCreate(request);
        return classCreatePW;
    }

    //@Security('jwt')
    @Post('login')
    @Tags('login')
    public async clientLogin(
        @Body() request: ClientLoginRequest
        ): Promise<any> {
            this.setStatus(201)
            const login =  this.UserService.loginService(request)
            return login;
            
    }

    
    
}