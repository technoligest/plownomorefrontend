import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


import { UserFeedComponent } from './userfeed.component/userfeed.component';
import { TestAppComponent } from './app.component/app.component';
import { NavbarComponent } from './navbar.component/navbar.component';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { MatButtonModule, MatMenuModule, MatIconModule, MatGridListModule, MatCardModule} from '@angular/material';


@NgModule({
  declarations: [
    TestAppComponent,
    UserFeedComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FontAwesomeModule,
    MatMenuModule,
    MatIconModule,
    MatButtonModule,
    MatGridListModule,
    MatCardModule
  ],
  providers: [],
  bootstrap: [
    TestAppComponent,
    UserFeedComponent,
    NavbarComponent
  ]
})
export class AppModule { }
