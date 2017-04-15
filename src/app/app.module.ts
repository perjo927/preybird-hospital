import { AppRoutingModule } from './app-routing.module';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { HttpModule }    from '@angular/http';
import { RouterModule }   from '@angular/router';

import { AppComponent } from './app.component';
import { LogoComponent } from './components/logo/logo.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { RegistrationFormComponent } from './components/registration-form/registration-form.component';
import { RegistrationPageComponent } from './components/registration-page/registration-page.component';
import { SpinnerComponent } from './components/spinner/spinner.component';

@NgModule({
  imports: [
    AppRoutingModule,
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule
  ],
  declarations: [
    AppComponent,
    LogoComponent,
    NavbarComponent,
    RegistrationFormComponent,
    RegistrationPageComponent,
    SpinnerComponent
  ],
  bootstrap: [
    AppComponent
  ]
})

export class AppModule { }
