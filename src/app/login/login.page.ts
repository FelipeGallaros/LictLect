import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage {
  loginData = {
    email: '',
    password: ''
  };

  constructor(private router: Router) {}

  onLogin() {
    // Aquí puedes implementar la lógica de inicio de sesión
    console.log('Iniciando sesión con', this.loginData);

    // Aquí podrías verificar las credenciales. Si son correctas, redirigir a la página de reflexiones.
    // if (this.loginData.email === 'user@example.com' && this.loginData.password === 'password') {
    //   this.router.navigate(['/reflexion']);
    // } else {
    //   alert('Credenciales incorrectas');
    // }
  }
}

