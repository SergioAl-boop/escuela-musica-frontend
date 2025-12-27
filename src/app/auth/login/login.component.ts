import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  imports: [CommonModule,FormsModule],
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  email = '';
  password = '';

  constructor(private auth: AuthService, private router: Router) {}

  login() {
    this.auth.login(this.email, this.password).subscribe({
      next: (res) => {
        // Aquí el token y el rol ya están guardados en localStorage
        alert(`Inicio de sesión exitoso. Rol: ${res.role}`);
        
        // Redirigir según rol
        if (res.role === 'admin') {
          this.router.navigate(['/armoniajoventudycomunidad']);
        } else {
          this.router.navigate(['/inicio']);
        }
      },
      error: (err) => {
        alert('Credenciales incorrectas');
      }
    });
  }
}
