import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InscripcionesService } from '../services/inscripciones.service';

@Component({
  standalone: true,
  selector: 'app-admin-inscripciones',
  imports: [CommonModule],
  templateUrl: './admin-inscripciones.component.html',
  styleUrls: ['./admin-inscripciones.component.css']
})
export class AdminInscripcionesComponent implements OnInit {

  inscripciones: any[] = [];
  cargando = true;

  constructor(private service: InscripcionesService) {}

  ngOnInit() {
    this.service.obtenerTodas().subscribe({
      next: (data: any[]) => {
        this.inscripciones = data;
        this.cargando = false;
      },
      error: () => this.cargando = false
    });
  }

  cargarInscripciones() {
    this.service.obtenerTodas().subscribe({
      next: (data) => {
        this.inscripciones = data;
      },
      error: (err) => {
        console.error('Error al cargar inscripciones', err);
      }
    });
  }

  /**
   * ✅ Aprobar inscripción
   */
  aprobar(id: number) {
    this.service.actualizarEstado(id, 'APROBADO').subscribe({
      next: () => {
        this.actualizarEstadoLocal(id, 'APROBADO');
      },
      error: () => {
        alert('Error al aprobar inscripción');
      }
    });
  }

  /**
   * ❌ Rechazar inscripción
   */
  rechazar(id: number) {
    this.service.actualizarEstado(id, 'RECHAZADO').subscribe({
      next: () => {
        this.actualizarEstadoLocal(id, 'RECHAZADO');
      },
      error: () => {
        alert('Error al rechazar inscripción');
      }
    });
  }

  /**
   * 🗑 Eliminar inscripción
   */
  eliminar(id: number) {
    const confirmar = confirm('¿Seguro que deseas eliminar esta inscripción?');
    if (!confirmar) return;

    this.service.eliminar(id).subscribe({
      next: () => {
        this.inscripciones = this.inscripciones.filter(i => i.id !== id);
      },
      error: () => {
        alert('Error al eliminar inscripción');
      }
    });
  }

  /**
   * 🔁 Actualiza el estado local sin recargar
   */
  private actualizarEstadoLocal(id: number, estado: string) {
    const inscripcion = this.inscripciones.find(i => i.id === id);
    if (inscripcion) {
      inscripcion.estado = estado;
    }
  }
}
