import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-register-admins',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './register-admins.component.html'
})
export class RegisterAdminsComponent {

  email = '';
  password = '';

  constructor(
    private auth: AuthService,
    private router: Router
  ) {}

  register() {
    this.auth.registerAdmins(this.email, this.password).subscribe({
      next: () => {
        alert('Administrador registrado');
        this.router.navigate(['/login']);
      },
      error: err => {
        console.error(err);
        alert('Error al registrar administrador');
      }
    });
  }
}
