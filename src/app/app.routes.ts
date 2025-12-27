import { Routes } from '@angular/router';
import { InicioComponent } from './pages/inicio/inicio.component';
import { NosotrosComponent } from './pages/nosotros/nosotros.component';
import { CursosComponent } from './pages/cursos/cursos.component';
import { ContactoComponent } from './pages/contacto/contacto.component';
import { InscripcionComponent } from './inscripcion/inscripcion.component';
import { ArmoniaComponent } from './pages/armonia/armonia.component';
import { LoginComponent } from './auth/login/login.component';
import { adminGuard } from './guards/admin.guard';


export const routes: Routes = [
  { path: '', redirectTo: 'inicio', pathMatch: 'full' },
  { path: 'inicio', component: InicioComponent },
    { path: 'login', component: LoginComponent },
  { path: 'nosotros', component: NosotrosComponent },
  { path: 'cursos', component: CursosComponent },
  { path: 'contacto', component: ContactoComponent },
  { path: 'armoniajoventudycomunidad', component: ArmoniaComponent,canActivate: [adminGuard]},
  { path: 'inscripcion/:curso', component: InscripcionComponent },
];
