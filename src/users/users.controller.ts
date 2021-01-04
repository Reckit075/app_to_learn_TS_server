import { Controller, Get } from '@nestjs/common';

// localhost:3001/users
@Controller('users')
export class UsersController {
    @Get()
    index(){
        return 'User webpage';
    }
}
