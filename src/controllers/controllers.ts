import { request } from "http";
import {
    Body,
    Controller,
    Get,
    Path,
    Post,
    Query,
    Route,
    Request,
    SuccessResponse,
    Tags,
  } from "tsoa";
import { instructorReq } from "../models/models";
import { UserService } from "../service/services";

@Route("endpoints")
export class UserControllers extends Controller{ 
    @Post('instructor_create')
    @Tags('instructor_create')
    public async instructorCreate(
        @Body() request: instructorReq
    ): Promise<any> {
        this.setStatus(201);
         const instrctr = new UserService().getInstructor(request);
         return instrctr;
    }

}