import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { InicioPage } from './inicio.page';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'inicio', // Redirigir a la nueva página de inicio
    pathMatch: 'full'
  },
  {
    path: 'inicio', // Asegúrate de que esta ruta esté bien definida
    loadChildren: () => import('../inicio/inicio.module').then(m => m.InicioPageModule) // Actualiza la ruta aquí si es necesario
  },
  {
    path: 'login',
    loadChildren: () => import('../login/login.module').then(m => m.LoginPageModule)
  },
  {
    path: 'register',
    loadChildren: () => import('../register/register.module').then(m => m.RegisterPageModule)
  },
  {
    path: 'reflexion',
    loadChildren: () => import('../reflexion/reflexion.module').then(m => m.ReflexionPageModule)
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class InicioPageRoutingModule {}

