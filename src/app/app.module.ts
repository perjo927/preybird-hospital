import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { SpinnerComponent } from './components/spinner/spinner.component';
import { RegistrationFormComponent } from './components/registration-form/registration-form.component';
import { NavbarComponent } from './components/navbar/navbar.component';

@NgModule({
  imports: [BrowserModule],
  declarations: [
    AppComponent,
    SpinnerComponent,
    RegistrationFormComponent,
    NavbarComponent
  ],
  bootstrap: [
    AppComponent
  ]
})

export class AppModule { }
