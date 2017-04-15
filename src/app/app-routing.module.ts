import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegistrationPageComponent } from './components/registration-page/registration-page.component';
import { PatientPageComponent } from './components/patient-page/patient-page.component';

const routes: Routes = [
    { path: '', redirectTo: '/register', pathMatch: 'full' },
    { path: 'register', component: RegistrationPageComponent },
    { path: 'patient/:id', component: PatientPageComponent },
    // { path: 'consultation/:id', component: ConsultationComponent }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule { }