import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-splash',
  templateUrl: './splash.component.html',
  styleUrls: ['./splash.component.scss'],
  standalone: false,
})
export class SplashComponent implements OnInit {
  visible: boolean = false;

  ngOnInit() {
    // Pequeño delay para que la animación de entrada se vea
    setTimeout(() => {
      this.visible = true;
    }, 100);
  }
}