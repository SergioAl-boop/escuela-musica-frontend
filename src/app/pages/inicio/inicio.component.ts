import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-inicio',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent {

  isAdmin = false;
  editando = false;

  descripcion = `
Somos una escuela dedicada a la formación musical de niños, jóvenes y adultos,
fomentando el amor por la música desde los primeros pasos.
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
    // Aquí luego lo mandas a backend o Firebase
  }
}
