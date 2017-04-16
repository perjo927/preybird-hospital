import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegistrationPageComponent } from './components/registration-page/registration-page.component';
import { PatientPageComponent } from './components/patient-page/patient-page.component';
import { ConsultationPageComponent } from './components/consultation-page/consultation-page.component';
// import { ConsultationDetailPageComponent } from './components/consultation-page/consultation-detail-page.component';

const routes: Routes = [
    { path: '', redirectTo: '/register', pathMatch: 'full' },
    { path: 'register', component: RegistrationPageComponent },
    { path: 'patient', redirectTo: '/patient/undefined', pathMatch: 'full' },
    { path: 'patient/:id', component: PatientPageComponent },
    { path: 'consultations', component: ConsultationPageComponent }
    // ,
    // { path: 'consultations/:id', component: ConsultationDetailPageComponent }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule { }
