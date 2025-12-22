import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({ providedIn: 'root' })
export class InscripcionesService {

  private api = 'http://localhost:3000/inscripciones';

  constructor(private http: HttpClient) {}

  crear(data: any) {
    return this.http.post(this.api, data);
  }
}
