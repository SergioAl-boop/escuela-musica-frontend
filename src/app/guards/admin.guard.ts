import { CanActivateFn, Router } from '@angular/router';
import { inject } from '@angular/core';
import { AuthService } from '../services/auth.service';

export const adminGuard: CanActivateFn = () => {

  const auth = inject(AuthService);
  const router = inject(Router);

  // ✅ JWT presente = usuario autenticado
  if (auth.isAuthenticated()) {
    return true;
  }

  // ❌ No hay token
  alert('Acceso solo para administradores');
  router.navigate(['/login']);
  return false;
};
