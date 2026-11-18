import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from '../../../typeorm/entities/User';
import { CreateUser } from '../../dtos/CreateUser.dto';
import { CreateUserParams } from '../../../utils/types';

@Injectable()
export class UsersService {

    constructor(
        @InjectRepository(User) private userRepository : Repository<User>,
    ){}

    findUser(){
        return this.userRepository.find();
    }


    createUser(userDetail : CreateUserParams){
        const newUser = this.userRepository.create(
            {
                ...userDetail,
                createAt : new Date(),
            }
        );
        return this.userRepository.save(newUser);
    }
}
