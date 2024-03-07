import { Component, EventEmitter, Output } from '@angular/core';
import { User } from '../classes/user';
import { Credentials } from '../classes/credentials';
import { NgForm } from '@angular/forms';
import { UsersService } from '../services/users.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  userCredentials: Credentials = new Credentials();
  @Output() onLogin = new EventEmitter<void>();

  constructor(private usersService: UsersService){

  }

  sendForm(form: NgForm): void
  {
    if(form.invalid){
      alert('Hay errores en el formulario')
      return;
    }

    if(!this.usersService.validateCredentials(this.userCredentials)){
      alert('Contraseña o usuario incorrecto');
      return;
    }
    this.onLogin.emit();
  }
}
