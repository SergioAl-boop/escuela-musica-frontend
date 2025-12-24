import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  standalone: true,
  imports: [FormsModule],
  template: `
  <div class="section">
    <h2>Login Administrador</h2>

    <input [(ngModel)]="usuario" placeholder="Usuario">
    <input [(ngModel)]="password" type="password" placeholder="Contraseña">

    
  </div>
  `
})
export class LoginAdminComponent {

  usuario = '';
  password = '';

  constructor(private auth: AuthService, private router: Router) {}


}
