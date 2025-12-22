import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BecariosService {

  private apiUrl = 'http://localhost:3000/becarios';

  constructor(private http: HttpClient) {}

  obtenerTodos() {
    return this.http.get<any[]>(this.apiUrl);
  }

  crear(becario: any) {
    return this.http.post(this.apiUrl, becario);
  }

  actualizar(id: number, data: any) {
    return this.http.put(`${this.apiUrl}/${id}`, data);
  }

  eliminar(id: number) {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }

  reporteApoyos() {
    return this.http.get(`${this.apiUrl}/reporte/apoyos`);
  }
}
