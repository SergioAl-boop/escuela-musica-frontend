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
import { Toast } from './shared/toast';


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
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  titulo = 'Armonia Juventud y Comunidad A.C';
  confirmLogout = false;

  constructor(
    public router: Router,
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

  isAuthPage(): boolean {
    const url = this.router.url;
    return url.includes('/login')
        || url.includes('/register-admins')
        || url.includes('/register-users');
  }

  loginAdmin() {
    this.router.navigate(['/login']);
  }

  logout() {
  this.auth.logout();

  Toast.fire({
    icon: 'info',
    title: 'Sesión cerrada correctamente'
  });

  this.router.navigate(['/login']);
}


  confirmLogoutNo() {
    this.confirmLogout = false;
  }
}
