import { AppRoutingModule } from './app-routing.module';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { HttpModule }    from '@angular/http';
import { RouterModule }   from '@angular/router';

import { AppComponent } from './app.component';
import { ConsultationPageComponent } from './components/consultation-page/consultation-page.component';
import { LogoComponent } from './components/logo/logo.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { PatientPageComponent } from './components/patient-page/patient-page.component';
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
    ConsultationPageComponent,
    LogoComponent,
    NavbarComponent,
    RegistrationFormComponent,
    RegistrationPageComponent,
    PatientPageComponent,
    SpinnerComponent
  ],
  bootstrap: [
    AppComponent
  ]
})

export class AppModule { }
