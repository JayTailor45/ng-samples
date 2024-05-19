import { Routes } from '@angular/router';
import { HomeComponent } from './page/home/home.component';
import { NotFoundComponent } from './page/not-found/not-found.component';

export const routes: Routes = [
  {
    path: 'home',
    loadComponent: () => HomeComponent,
  },
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'home',
  },
  {
    path: '**',
    pathMatch: 'full',
    loadComponent: () => NotFoundComponent,
  },
];
