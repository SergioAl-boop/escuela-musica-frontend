  import { Component, OnInit } from '@angular/core';
  import { CommonModule } from '@angular/common';
  import { AuthService } from '../../services/auth.service';
  import { ArmoniaService, Foto } from '../../services/armonia.service';
  import { FormsModule } from '@angular/forms';
  import { DonacionesService } from '../../services/donaciones.service';


  @Component({
    selector: 'app-armonia',
    standalone: true,
    imports: [CommonModule, FormsModule],
    templateUrl: './armonia.component.html',
    styleUrls: ['./armonia.component.css']
  })
  export class ArmoniaComponent implements OnInit  {

    fotos: Foto[] = [];

    constructor(
      public auth: AuthService,
      private armoniaService: ArmoniaService,
      private donacionesService: DonacionesService
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


donacion = {
  destino: '',
  monto: null as number | null
};

cuentaVisible = false;
cuentaMostrada = '';
copiado = false;

actualizarCuenta() {
  this.cuentaVisible = true;

  if (this.donacion.destino === 'AJYC') {
    this.cuentaMostrada = 'BANORTE 1234 5678 9012 3456';
  }

  if (this.donacion.destino === 'EIMSC') {
    this.cuentaMostrada = 'BBVA 9876 5432 1098 7654';
  }

  if (this.donacion.destino === 'AMBAS') {
    this.cuentaMostrada =
      'AJyC: 1234 5678 9012 3456 | EIMSC: 9876 5432 1098 7654';
  }
}

copiarCuenta() {
  navigator.clipboard.writeText(this.cuentaMostrada);
  this.copiado = true;

  setTimeout(() => {
    this.copiado = false;
  }, 2000);
}

donar() {
  if (!this.donacionesService.donar || !this.donacion.monto) {
    alert('⚠️ Selecciona destino y monto');
    return;
  }

  // 🔑 aquí luego conectas al backend
  console.log('Donación enviada:', this.donacion);

  alert(`🙏 Gracias por tu donación de $${this.donacion.monto} MXN`);

  this.donacion = { destino: '', monto: null };
  this.cuentaVisible = false;
}


  }
