import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-nosotros',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './nosotros.component.html',
  styleUrls: ['./nosotros.component.css']
})
export class NosotrosComponent {

  isAdmin = false;
  editando = false;

  descripcion = `
La Escuela de Iniciación Musical Santa Cecilia ofrece educación musical de calidad,
con profesores especializados y un enfoque pedagógico integral.
  `;

  constructor(private auth: AuthService) {
    this.isAdmin = this.auth.getRole() === 'admin';
  }

  editar() {
    this.editando = true;
  }

  guardar() {
    this.editando = false;

    console.log('Texto guardado:', this.descripcion);
    // aquí después mandas al backend o Firebase
  }
}
