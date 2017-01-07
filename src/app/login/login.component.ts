import {Component, OnInit} from '@angular/core';
import {AUTH_PROVIDERS, AuthService} from '../auth.service'

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css'],
    providers: [AUTH_PROVIDERS]
})
export class LoginComponent implements OnInit {

    message: string;
    constructor(private authService: AuthService) {
        this.message = '';
    }

    login(username: string, password: string): boolean {
        this.message = '';
        if (!this.authService.login(username, password)) {
            this.message = 'Incorrect credentials';
            setTimeout(function() {
                this.messages = '';
            }.bind(this), 2500)
        }
        return false;
    }

    logout(): boolean {
        this.authService.logout();
        return false;
    }

    ngOnInit() {
    }

}
