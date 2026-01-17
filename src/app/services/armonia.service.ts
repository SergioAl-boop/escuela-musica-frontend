import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Foto {
  id: number;
  url: string;
}

@Injectable({ providedIn: 'root' })
export class ArmoniaService {

  private api = 'http://localhost:3000/armonia';

  constructor(private http: HttpClient) {}

  obtenerFotos() {
    return this.http.get<Foto[]>(`${this.api}/fotos`);
  }

  subirFoto(file: File) {
    const formData = new FormData();
    formData.append('foto', file);

    return this.http.post(`${this.api}/subir`, formData);
  }
}
