import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-contacto',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.css']
})
export class ContactoComponent {

  isAdmin = false;
  editando = false;

  direccion = 'C. Allende 516, 71317 Vicente Guerrero, Oax.';
  telefono = '951-365-83-40';
  email = 'armoniajoventudycomunidad@outlook.com';

  constructor(private auth: AuthService) {
    this.isAdmin = this.auth.getRole() === 'admin';
  }

  editar() {
    this.editando = true;
  }

  guardar() {
    this.editando = false;

    console.log('Contacto guardado:', {
      direccion: this.direccion,
      telefono: this.telefono,
      email: this.email
    });

    // Aquí luego mandas a backend o Firebase
  }
}
