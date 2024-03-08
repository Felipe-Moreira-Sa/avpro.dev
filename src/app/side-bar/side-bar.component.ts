import { Component } from '@angular/core';
import { SidebarService } from './side-bar.service';

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrl: './side-bar.component.scss'
})
export class SideBarComponent {
  activeItem: string = 'Dashboard'; // Valor padrão

  setActive(itemName: string): void {
    this.activeItem = itemName;
    console.log('Item ativo:', this.activeItem);
  }

  constructor(private sidebarService: SidebarService) {}

  onMenuItemClick(title: string) {
    this.sidebarService.updateTitle(title);
  }
}
