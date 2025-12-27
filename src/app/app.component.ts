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
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    RouterLink,
    RouterLinkActive,
    CommonModule
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'] // corregido de styleUrl
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
   * Oculta header/nav/footer en páginas de autenticación
   */
  isAuthPage(): boolean {
    const url = this.router.url;
    return url.includes('/login') 
        || url.includes('/register-admins') 
        || url.includes('/register-users');
  }

  /**
   * Redirige a login
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
