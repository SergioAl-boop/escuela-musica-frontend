import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cursos',
  standalone: true,
  imports: [],
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.css']
})
export class CursosComponent {

  constructor(private router: Router) {}

  inscribirse(curso: string) {
    console.log('Curso seleccionado:', curso); // 🔍 prueba
    this.router.navigate(['/inscripcion', curso]);
  }
}
