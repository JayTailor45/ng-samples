import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {
  MatDrawer,
  MatDrawerContainer,
  MatDrawerContent,
} from '@angular/material/sidenav';
import { MatButton } from '@angular/material/button';
import { MatToolbar } from '@angular/material/toolbar';
import { MatIcon } from '@angular/material/icon';
import { SideNavComponent } from './core/components/side-nav/side-nav.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    MatDrawer,
    MatDrawerContainer,
    MatDrawerContent,
    MatButton,
    MatToolbar,
    MatIcon,
    SideNavComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'ng-samples';
}
