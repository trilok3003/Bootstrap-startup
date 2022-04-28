import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { HeaderComponent } from './header/header.component';
import { RolesComponent } from './roles/roles.component';
import { TabsComponent } from './tabs/tabs.component';

@NgModule({
  imports: [BrowserModule, FormsModule],
  declarations: [
    AppComponent,
    HelloComponent,
    HeaderComponent,
    RolesComponent,
    TabsComponent,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
