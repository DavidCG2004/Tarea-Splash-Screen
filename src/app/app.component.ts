import { Component, OnInit } from '@angular/core';
import { SplashScreen } from '@capacitor/splash-screen';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
  standalone: false,
})
export class AppComponent implements OnInit {
  showSplash: boolean = true;

  constructor() {}

  async ngOnInit() {
    // Ocultar el splash nativo de Capacitor inmediatamente
    // para que tome control nuestro splash en HTML
    await SplashScreen.hide({ fadeOutDuration: 0 });

    // Mostrar el splash de Angular por 3 segundos
    setTimeout(() => {
      this.showSplash = false;
    }, 3000);
  }
}