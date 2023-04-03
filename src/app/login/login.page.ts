import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
    selector: 'app-login',
    templateUrl: './login.page.html',
    styleUrls: ['./login.page.scss'],
})
export class LoginPage {
    username: string;
    password: string; 

    constructor(private authService: AuthService, private router: Router) { }

    login() {
        this.authService.login(this.username, this.password).subscribe((data: any) => {
            if (data.userType === 'parent') {
                this.router.navigate(['/parent-home']);
            } else if (data.userType === 'babysitter') {
                this.router.navigate(['/babysitter-home']);
            }
        });
    }
}
