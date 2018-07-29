import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


import { UserFeedComponent } from './userfeed.component/userfeed.component';
import { DefaultAppComponent } from './app.component/app.component';
import { NavbarComponent } from './navbar.component/navbar.component';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { MatButtonModule, MatMenuModule, MatIconModule} from '@angular/material';

@NgModule({
  declarations: [
    UserFeedComponent,
    DefaultAppComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FontAwesomeModule,
    MatMenuModule,
    MatIconModule,
    MatButtonModule
  ],
  providers: [],
  bootstrap: [
    UserFeedComponent,
    NavbarComponent
  ]
})
export class AppModule { }
