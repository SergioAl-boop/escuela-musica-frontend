import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FormsModule, NgForm } from '@angular/forms';
import { InscripcionesService } from '../services/inscripciones.service';

@Component({
  selector: 'app-inscripcion',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './inscripcion.component.html',
  styleUrls: ['./inscripcion.component.css']
})
export class InscripcionComponent {

  curso = '';

   registroExitoso = false;

  formData = {
    nombre: '',
    correo: '',
    telefono: '',
    instrumento:''
  };

  constructor(
    private route: ActivatedRoute,
    private inscripcionesService: InscripcionesService
  ) {
    this.curso = this.route.snapshot.paramMap.get('curso') || '';
  }

  enviar() {
    const data = {
      curso: this.curso,
      instrumento: this.formData.instrumento,
      nombre: this.formData.nombre,
      correo: this.formData.correo,
      telefono: this.formData.telefono
    };

    this.inscripcionesService.crear(data).subscribe({
      next: () => {
        // 👇 MOSTRAR CARD BONITA
        this.registroExitoso = true;

        // limpiar formulario
        this.formData = {
          nombre: '',
          correo: '',
          telefono: '',
          instrumento: ''
        };
      },
      error: () => {
        alert('Ha ocurrido un error al guardar tu inscripción');
      }
    });
  }

}
