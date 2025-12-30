import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  standalone: true,
  imports: [FormsModule],
  template: ``
})
export class LoginAdminComponent {

  usuario = '';
  password = '';

  constructor(private auth: AuthService, private router: Router) {}


}
