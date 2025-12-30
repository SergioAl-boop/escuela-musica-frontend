import { CanActivateFn, Router } from '@angular/router';
import { inject } from '@angular/core';
import { AuthService } from '../services/auth.service';

export const adminGuard: CanActivateFn = () => {

  const auth = inject(AuthService);
  const router = inject(Router);

  // 1️⃣ Verificar sesión
  if (!auth.isAuthenticated()) {
    alert('Debes iniciar sesión');
    router.navigate(['/login']);
    return false;
  }

  // 2️⃣ Verificar rol
  const role = auth.getRole();

  if (role === 'admin') {
    return true;
  }

  // ❌ Usuario sin permisos
  alert('Acceso solo para administradores');
  router.navigate(['/inicio']);
  return false;
};
