import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { UserFeedComponent } from './user.component/userfeed.component';
import { DefaultAppComponent } from './app.component/app.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';


@NgModule({
  declarations: [
    UserFeedComponent,
    DefaultAppComponent
  ],
  imports: [
    BrowserModule,
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [
    UserFeedComponent
  ]
})
export class AppModule { }
