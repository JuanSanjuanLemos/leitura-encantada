import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ReadComponent } from './pages/read/read.component';
import { LoginComponent } from './pages/login/login.component';
import { TeacherComponent } from './pages/teacher/teacher.component';
import { authGuard } from './guards/auth.guard';

export const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'leitura', component: ReadComponent},
  {path: 'login', component: LoginComponent},
  {path: 'teacher', component: TeacherComponent, canActivate: [authGuard]},
  {path: 'teacher/create', loadComponent: () => import('./pages/create-story/create-story.component').then(m => m.CreateStoryComponent), canActivate: [authGuard]},
  {path: '**', redirectTo: ''}
];
