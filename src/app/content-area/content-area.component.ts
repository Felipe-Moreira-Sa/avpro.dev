//content-area.component.ts
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { SidebarService } from '../side-bar/side-bar.service';

@Component({
  selector: 'app-content-area',
  templateUrl: './content-area.component.html',
  styleUrls: ['./content-area.component.scss']
})
export class ContentAreaComponent implements OnInit, OnDestroy {
  title = 'Dashboard';
  titleSubscription!: Subscription;

  constructor(private sidebarService: SidebarService) {}

  ngOnInit() {
    // Inscreva-se no observável do título e atualize o título conforme necessário
    this.titleSubscription = this.sidebarService.getTitleObservable().subscribe(
      newTitle => {
        this.title = newTitle;
      }
    );
  }

  ngOnDestroy() {
    // Desinscreva-se para evitar vazamentos de memória
    if (this.titleSubscription) {
      this.titleSubscription.unsubscribe();
    }
  }
}