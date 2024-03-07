import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-content-area',
  templateUrl: './content-area.component.html',
  styleUrl: './content-area.component.scss'
})
export class ContentAreaComponent {
  @Input() title: string = 'Dashboard';

  onChangeTitle(newTitle: string) {
    this.title = newTitle;
  }
}
