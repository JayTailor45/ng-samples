import {Routes} from '@angular/router';
import {HomeComponent} from './page/home/home.component';
import {NotFoundComponent} from './page/not-found/not-found.component';
import {SignalStoreCrudComponent} from "./page/signal-store-crud/signal-store-crud.component";
import {SignalStoreCrudService} from "./services/signal-store-crud.service";

export const routes: Routes = [
  {
    path: 'home',
    loadComponent: () => HomeComponent,
  },
  {
    path: 'signal-store-crud',
    loadComponent: () => SignalStoreCrudComponent,
    providers: [SignalStoreCrudService]
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
