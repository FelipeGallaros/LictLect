import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage {
  registerData = {
    name: '',
    email: '',
    password: ''
  };

  constructor(private router: Router) {}

  onRegister() {
    const { name, email, password } = this.registerData;

    // Aquí puedes agregar la lógica real para registrar al usuario
    console.log('Usuario registrado:', name, email);
    this.router.navigate(['/login']); // Redirige a la página de login tras el registro
  }
}
