import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-register-admins',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './register-admins.component.html',
  styleUrls: ['./register-admins.component.css']
})
export class RegisterAdminsComponent {
  email = '';
  password = '';

  constructor(private auth: AuthService, private router: Router) {}

  register() {
    this.auth.registerAdmins(this.email, this.password).subscribe({
      next: (res) => {
        alert('Administrador registrado con éxito');
        this.router.navigate(['/login']);
      },
      error: () => {
        alert('Error al registrar administrador');
      }
    });
  }
}
