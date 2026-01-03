import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-cursos',
  standalone: true,
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.css']
})
export class CursosComponent {

  constructor(
    private router: Router,
    public auth: AuthService
  ) {}

  inscribirse(curso: string) {
    this.router.navigate(['/inscripcion', curso]);
  }

  verInscripciones() {
    this.router.navigate(['/admin-inscripciones']);
  }
}
