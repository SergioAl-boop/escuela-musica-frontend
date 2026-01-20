import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({ providedIn: 'root' })
export class DonacionesService {

  private api = 'http://localhost:3000/donaciones';

  constructor(private http: HttpClient) {}

  donar(data: any) {
    return this.http.post(this.api, data);
  }
}
