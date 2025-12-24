import { Component } from '@angular/core';
import { RouterOutlet, RouterLink, RouterLinkActive, Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    RouterLink,
    RouterLinkActive
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

 titulo = 'Armonia Juventud y Comunidad A.C';

  constructor(private router: Router) {
    this.router.events
      .pipe(filter(event => event instanceof NavigationEnd))
      .subscribe((event: NavigationEnd) => {

        if (event.url.includes('/cursos')) {
          this.titulo = 'Escuela de Iniciación Musical Santa Cecilia';
        } else {
          this.titulo = 'Armonia Juventud y Comunidad A.C';
        }

      });
  }

}
