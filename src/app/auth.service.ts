import {Injectable} from '@angular/core';

@Injectable()
export class AuthService {

    constructor() {
    }

    login(user: string, password: string): boolean {
        if (user === 'user' && password === 'password') {
            localStorage.setItem('username', user);
            return true;
        }
        return false;
    }

}
