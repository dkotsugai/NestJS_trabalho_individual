import { Body, Controller, HttpException, HttpStatus, Post } from '@nestjs/common';
import { CreateRegisterDTO } from './dto/createRegister.dto';
import { RegisterService } from './register.service';

@Controller('register')
export class RegisterController {
    constructor(private readonly registerService: RegisterService) { }

    @Post()
    async createClient(@Body() req: CreateRegisterDTO){
        return this.registerService.createClient(req);
}}