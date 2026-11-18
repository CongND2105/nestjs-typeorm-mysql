import { Body, Controller, Get, Post } from '@nestjs/common';
import { CreateUser } from '../../dtos/CreateUser.dto';
import { UsersService } from '../../service/users/users.service';

@Controller('users')
export class UsersController {
    constructor(private userService : UsersService){}
    @Get()
    getUser(){
       return this.userService.findUser();
    }

    @Post()
    createUser(@Body() createUserDto : CreateUser){
        this.userService.createUser(createUserDto);
    }

}
