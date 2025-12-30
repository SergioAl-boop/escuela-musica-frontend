import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  standalone: true, // 👈 CLAVE
  imports: [CommonModule, FormsModule, RouterModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  email = '';
  password = '';

  constructor(
    private auth: AuthService,
    private router: Router
  ) {}

  login() {
    this.auth.login(this.email, this.password).subscribe({
      next: (res) => {
        alert(`Inicio de sesión exitoso. Rol: ${res.role}`);

        // Redirección por rol
        if (res.role === 'admin') {
          this.router.navigate(['/armoniajoventudycomunidad']);
        } else {
          this.router.navigate(['/inicio']);
        }
      },
      error: () => {
        alert('Credenciales incorrectas');
      }
    });
  }
}
