import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { tap } from 'rxjs/operators';

@Injectable({ providedIn: 'root' })
export class AuthService {

  private readonly TOKEN_KEY = 'token';
  private readonly ROLE_KEY = 'role';

  constructor(private http: HttpClient) {}

  login(username: string, password: string) {
    return this.http.post<{ token: string, role: string }>(
      'http://localhost:3000/auth/login',
      { email: username, password } 
    ).pipe(
      tap(res => {
        localStorage.setItem(this.TOKEN_KEY, res.token);
        localStorage.setItem(this.ROLE_KEY, res.role);
        console.log('Inicio de sesión. Rol:', res.role);
      })
    );
  }

  getRole(): string | null {
    return localStorage.getItem(this.ROLE_KEY);
  }

  getToken(): string | null {
    return localStorage.getItem(this.TOKEN_KEY);
  }

  isAuthenticated(): boolean {
    return !!this.getToken();
  }

  logout() {
    localStorage.removeItem(this.TOKEN_KEY);
    localStorage.removeItem(this.ROLE_KEY);
  }
  registerAdmins(email: string, password: string) {
  return this.http.post('http://localhost:3000/auth/register-admins', { email, password });
}

registerUsers(email: string, password: string) {
  return this.http.post('http://localhost:3000/auth/register-users', { email, password });
}

}
