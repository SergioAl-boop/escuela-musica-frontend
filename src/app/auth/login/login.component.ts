import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router, RouterModule, ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  email = '';
  password = '';

  errorMsg = '';
  loading = false;

  constructor(
    private auth: AuthService,
    private router: Router
  ) {}

  login() {
    this.errorMsg = '';
    this.loading = true;

    this.auth.login(this.email, this.password).subscribe({
      next: (res) => {
        this.loading = false;

        if (res.role === 'admin') {
          this.router.navigate(['/armoniajoventudycomunidad']);
        } else {
          this.router.navigate(['/inicio']);
        }
      },
      error: () => {
        this.loading = false;
        this.errorMsg = 'Correo o contraseña incorrectos';
      }
    });
  }
}
  
