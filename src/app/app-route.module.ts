import { AuthGaurd } from './auth/auth.gaurd';
import { TrainingComponent } from './training/training.component';
import { LoginComponent } from './auth/login/login.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WelcomeComponent } from './welcome/welcome.component';
import { SignupComponent } from './auth/signup/signup.component';

const rounts: Routes = [
  {path: '', component: WelcomeComponent},
  {path: 'signup', component: SignupComponent},
  {path: 'login', component: LoginComponent},
  {path: 'training', component: TrainingComponent, canActivate: [AuthGaurd]}
];
@NgModule({
  imports: [RouterModule.forRoot(rounts)],
  exports: [RouterModule],
  providers: [AuthGaurd]
})
export class AppRouteModule {}
