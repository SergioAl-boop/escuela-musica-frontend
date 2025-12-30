import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-register-users',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './register-users.component.html',
  styleUrls: ['./register-users.component.css']
})
export class RegisterUsersComponent {

  email = '';
  password = '';

  constructor(
    private auth: AuthService,
    private router: Router
  ) {}

  register() {
    this.auth.registerUsers(this.email, this.password).subscribe({
      next: () => {
        alert('Usuario registrado');
        this.router.navigate(['/login']);
      },
      error: err => {
        console.error(err);
        alert('Error al registrar usuario');
      }
    });
  }
}
