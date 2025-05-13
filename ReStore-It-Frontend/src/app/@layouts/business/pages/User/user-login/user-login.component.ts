import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from '../../../../../services/loginService/login.service';
import { FormsModule } from '@angular/forms';
import { HttpResponse } from '@angular/common/http';

class Login {
  constructor(
    public email: string,
    public password: string
  ) { }
}

@Component({
  selector: 'app-user-login',
  imports: [CommonModule, FormsModule],
  templateUrl: './user-login.component.html',
  styleUrl: './user-login.component.css'
})
export class UserLoginComponent {

  loginCredentials: Login = {
    email: '',
    password:''
  }

  constructor(private router: Router, private loginService: LoginService) {

  }

  navigateToRegistration(): void {
    this.router.navigate(['/business/register']);
  }

  async validateLogin(login: Login) {

    this.loginService.ValidateLogin(login.email, login.password).subscribe((response: boolean) => {
      if(response == true){
        this.router.navigate(['/business']).then(() => {
          console.log('Navigation successful!');
        });
      } else {
      // Remain on the page (give error notification that either the email or password is incorrect) }
    }
    })
  }
}
