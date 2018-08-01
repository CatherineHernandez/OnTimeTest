import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { LogInComponent } from './Components/log-in/log-in.component';
import { HeaderComponent } from './Components/RestofApp/header/header.component';
import { BodyComponent } from './Components/RestofApp/body/body.component';

@NgModule({
  declarations: [
    AppComponent,
    LogInComponent,
    HeaderComponent,
    BodyComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
