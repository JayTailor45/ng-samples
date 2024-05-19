import {Component, EventEmitter, Output} from '@angular/core';
import {MatListModule} from '@angular/material/list';
import {RouterLink, RouterLinkActive} from '@angular/router';

type NavItem = {
  id: number;
  name: string;
  path: string;
};

@Component({
  selector: 'app-side-nav',
  standalone: true,
  imports: [MatListModule, RouterLink, RouterLinkActive],
  templateUrl: './side-nav.component.html',
  styleUrl: './side-nav.component.scss',
})
export class SideNavComponent {

  readonly navigations: NavItem[] = [
    {
      id: 1,
      name: 'Home',
      path: 'home',
    },
    {
      id: 2,
      name: 'Signal Store CRUD',
      path: 'signal-store-crud',
    },
  ];

  @Output() navChanged = new EventEmitter<void>();
}
