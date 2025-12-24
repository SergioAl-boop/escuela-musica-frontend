import { Component } from '@angular/core';
import { RouterOutlet, RouterLink, RouterLinkActive, Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs';
import { AuthService } from './services/auth.service';

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
 isAdmin = false;

  constructor(
    private router: Router,
    public auth: AuthService
  ) {

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

  loginAdmin() {
    this.auth.setAdmin(true);
    alert('Sesión de administrador iniciada');
  }

  logout() {
    this.auth.logout();
    alert('Sesión cerrada');
    this.router.navigate(['/inicio']);
  }
}
