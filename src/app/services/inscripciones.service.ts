import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class InscripcionesService {

  private api = 'http://localhost:3000/inscripciones';

  constructor(private http: HttpClient) {}

  crear(data: any) {
    return this.http.post(this.api, data);
  }

  // 🔹 OBTENER TODAS LAS INSCRIPCIONES (ADMIN)
  obtenerTodas(): Observable<any[]> {
    return this.http.get<any[]>(this.api);
  }

  // 🔹 ELIMINAR INSCRIPCIÓN
  eliminar(id: number): Observable<any> {
    return this.http.delete(`${this.api}/${id}`);
  }

  // 🔹 (OPCIONAL) ACTUALIZAR ESTADO
  actualizarEstado(id: number, estado: string): Observable<any> {
    return this.http.patch(`${this.api}/${id}`, { estado });
  }

  
}

