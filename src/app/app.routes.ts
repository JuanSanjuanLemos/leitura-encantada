import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ReadComponent } from './pages/read/read.component';

export const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'leitura', component: ReadComponent},
];
