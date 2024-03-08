import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SidebarService {
  private titleSubject = new BehaviorSubject<string>('Dashboard');
  
  // Método para atualizar o título
  updateTitle(title: string) {
    this.titleSubject.next(title);
  }

  // Observable para o título
  getTitleObservable() {
    return this.titleSubject.asObservable();
  }
}
