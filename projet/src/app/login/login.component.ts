import { Component } from '@angular/core';
import { User } from '../Model/user';
import { AuthService } from '../Service/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styles: ``
})
export class LoginComponent {

  constructor(private authService: AuthService, private router: Router) { }


  user = new User();

  erreur: number= 0;

  nLoggedin() {
    console.log(this.user);
    let isValidUser: Boolean = this.authService.SignIn(this.user);
    if (isValidUser)
      this.router.navigate(['/']);
    else
       // alert('Login ou mot de passe incorrecte!');
       this.erreur = 1;
  }

}
