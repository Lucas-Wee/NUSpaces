import {
  canActivate,
  redirectLoggedInTo,
  redirectUnauthorizedTo,
} from '@angular/fire/auth-guard';

import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './component/home/home.component';
import { LandingComponent } from './component/landing/landing.component';
import { LoginComponent } from './component/login/login.component';
import { SignUpComponent } from './component/sign-up/sign-up.component';
import { ProfileComponent } from './component/profile/profile.component';
import { EateriesComponent } from './component/category/eateries/eateries.component';
import { StudyspotsComponent } from './component/category/studyspots/studyspots.component';
import { FacilitiesComponent } from './component/category/facilities/facilities.component';
import { ScenicviewsComponent } from './component/category/scenicviews/scenicviews.component';
import { HiddengemsComponent } from './component/category/hiddengems/hiddengems.component';
import { ResetPasswordComponent } from './component/reset-password/reset-password.component';
import { VerifyEmailComponent } from './component/verify-email/verify-email.component';

const redirectUnauthorizedToLogin = () => redirectUnauthorizedTo(['login']);
const redirectLoggedInToHome = () => redirectLoggedInTo(['home']);

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: LandingComponent,
  },
  {
    path: 'login',
    component: LoginComponent,
    ...canActivate(redirectLoggedInToHome),
  },
  {
    path: 'sign-up',
    component: SignUpComponent,
    ...canActivate(redirectLoggedInToHome),
  },
  {
    path: 'home',
    component: HomeComponent,
    ...canActivate(redirectUnauthorizedToLogin),
  },
  {
    path: 'profile',
    component: ProfileComponent,
    ...canActivate(redirectUnauthorizedToLogin,)
  },
  {
    path: 'eateries',
    component: EateriesComponent,
    ...canActivate(redirectUnauthorizedToLogin,)
  },
  {
    path: 'studyspots',
    component: StudyspotsComponent,
    ...canActivate(redirectUnauthorizedToLogin,)
  },
  {
    path: 'facilities',
    component: FacilitiesComponent,
    ...canActivate(redirectUnauthorizedToLogin,)
  },
  {
    path: 'scenicviews',
    component: ScenicviewsComponent,
    ...canActivate(redirectUnauthorizedToLogin,)
  },
  {
    path:'hiddengems',
    component: HiddengemsComponent,
    ...canActivate(redirectUnauthorizedToLogin,)
  },
  {
    path: 'forgot-password', 
    component : ResetPasswordComponent,
    ...canActivate(redirectUnauthorizedToLogin,)
  },
  {
    path: 'verify-email', 
    component : VerifyEmailComponent,
    ...canActivate(redirectUnauthorizedToLogin,)
  }
];

@NgModule({
  imports: [CommonModule, 
    RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }