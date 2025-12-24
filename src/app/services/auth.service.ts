import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({ providedIn: 'root' })
export class AuthService {

  private isAdmin = false;

  constructor(private http: HttpClient) {}

  login(username: string, password: string) {
    return this.http.post<any>('http://localhost:3000/admin/login', {
      username,
      password
    });
  }


   esAdmin(): boolean {
    return this.isAdmin;
  }

  setAdmin(value: boolean) {
    this.isAdmin = value;
  }

  getAdmin() {
    return this.isAdmin;
  }

  logout() {
    this.isAdmin = false;
  }


}
