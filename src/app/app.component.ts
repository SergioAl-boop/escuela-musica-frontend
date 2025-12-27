import { Component } from '@angular/core';
import {
  RouterOutlet,
  RouterLink,
  RouterLinkActive,
  Router,
  NavigationEnd
} from '@angular/router';
import { filter } from 'rxjs';
import { AuthService } from '../app/services/auth.service';

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

  constructor(
    public router: Router,
    public auth: AuthService
  ) {

    // Cambiar título según ruta
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

  /**
   * Oculta header/nav/footer en la página de login
   */
  isLoginPage(): boolean {
    return this.router.url === '/login';
  }

  /**
   * Redirige al login
   */
  loginAdmin() {
    this.router.navigate(['/login']);
  }

  /**
   * Cierra sesión JWT
   */
  logout() {
    this.auth.logout();
    this.router.navigate(['/login']);
  }
}
