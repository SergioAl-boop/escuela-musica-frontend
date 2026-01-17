  import { Component, OnInit } from '@angular/core';
  import { CommonModule } from '@angular/common';
  import { AuthService } from '../../services/auth.service';
  import { ArmoniaService, Foto } from '../../services/armonia.service';

  @Component({
    selector: 'app-armonia',
    standalone: true,
    imports: [CommonModule],
    templateUrl: './armonia.component.html',
    styleUrls: ['./armonia.component.css']
  })
  export class ArmoniaComponent implements OnInit  {

    fotos: Foto[] = [];

    constructor(
      public auth: AuthService,
      private armoniaService: ArmoniaService
    ) {}
    ngOnInit() {
    // 🔑 CARGA AUTOMÁTICA PARA TODOS (user, admin, superadmin)
    this.mostrarFotos();
  }


    mostrarFotos() {
      this.armoniaService.obtenerFotos().subscribe({
        next: (data) => {
          this.fotos = data;
        },
        error: (err) => {
          console.error('Error al cargar fotos', err);
        }
      });
    }


  subirFoto(event: Event) {
    const input = event.target as HTMLInputElement;
    if (!input.files || input.files.length === 0) return;

    const file = input.files[0];

    this.armoniaService.subirFoto(file).subscribe({
      next: () => {
        this.mostrarFotos(); // 🔑 recarga real desde backend
        input.value = '';
      },
      error: (err) => console.error(err),
    });
  }




  }
