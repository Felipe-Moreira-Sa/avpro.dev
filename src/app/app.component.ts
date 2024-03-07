import { Component } from '@angular/core';
import { title } from 'process';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  isSidebarVisible = true;
  title = 'Dashboard';

  toggleSidebar(isMenuOpen: boolean) {
    console.log(isMenuOpen);
    this.isSidebarVisible = isMenuOpen;
  }
}
