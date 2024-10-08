import { Component } from '@angular/core';

@Component({
  selector: 'app-reflexion',
  templateUrl: './reflexion.page.html',
  styleUrls: ['./reflexion.page.scss'],
})
export class ReflexionPage {
  reflexiones: string[] = [
    'La vida es un viaje, no un destino.',
    'El aprendizaje nunca agota la mente.',
    'La felicidad no es algo hecho. Proviene de tus propias acciones.',
    // Agrega más reflexiones aquí
  ];

  constructor() { }
}
