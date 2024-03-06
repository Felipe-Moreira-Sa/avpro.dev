import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { TitleBarComponent } from './title-bar/title-bar.component';
import { SideBarComponent } from './side-bar/side-bar.component';
import { ContentAreaComponent } from './content-area/content-area.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { PlansComponent } from './pages/plans/plans.component';
import { UsersComponent } from './pages/users/users.component';

@NgModule({
  declarations: [
    AppComponent,
    TitleBarComponent,
    SideBarComponent,
    ContentAreaComponent,
    DashboardComponent,
    PlansComponent,
    UsersComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    provideClientHydration(),
    provideAnimationsAsync()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
