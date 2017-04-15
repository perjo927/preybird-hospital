import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { LogoComponent } from './components/logo/logo.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { RegistrationFormComponent } from './components/registration-form/registration-form.component';
import { SpinnerComponent } from './components/spinner/spinner.component';

@NgModule({
  imports: [BrowserModule],
  declarations: [
    AppComponent,
    LogoComponent,
    NavbarComponent,
    RegistrationFormComponent,
    SpinnerComponent
  ],
  bootstrap: [
    AppComponent
  ]
})

export class AppModule { }
