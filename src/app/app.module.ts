import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';

// Angular material
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatMenuModule } from '@angular/material/menu';


// Firebase Libraries
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { environment } from '../environments/environment';
import { provideAuth, getAuth } from '@angular/fire/auth';
import { provideFirestore, getFirestore } from '@angular/fire/firestore';
import { getStorage, provideStorage } from '@angular/fire/storage';


// Other Libraries
import { HotToastModule } from '@ngneat/hot-toast';

// Angular Components 
import { AppComponent } from './app.component';
import { HomeComponent } from './component/home/home.component';
import { PostComponent } from './component/post/post.component';
import { FeedComponent } from './component/feed/feed.component';
import { LoginComponent } from './component/login/login.component';
import { RouterModule } from '@angular/router';
import { SignUpComponent } from './component/sign-up/sign-up.component';
import { ProfileDynamicComponent } from './component/profile-dynamic/profile-dynamic.component';
import { ProfileComponent } from './component/profile/profile.component';
import { MakePostComponent } from './component/make-post/make-post.component';
import { EateriesComponent } from './component/category/eateries/eateries.component';
import { StudyspotsComponent } from './component/category/studyspots/studyspots.component';
import { FacilitiesComponent } from './component/category/facilities/facilities.component';
import { ScenicviewsComponent } from './component/category/scenicviews/scenicviews.component';
import { HiddengemsComponent } from './component/category/hiddengems/hiddengems.component';








@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PostComponent,
    FeedComponent,
    LoginComponent,
    SignUpComponent,
    ProfileDynamicComponent,
    ProfileComponent,
    MakePostComponent,
    EateriesComponent,
    StudyspotsComponent,
    FacilitiesComponent,
    ScenicviewsComponent,
    HiddengemsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatSidenavModule,
    MatButtonModule,
    MatIconModule,
    MatDividerModule,
    MatCardModule,
    MatInputModule,
    MatSelectModule,
    MatMenuModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    RouterModule.forRoot([
      {
        path: '',
        component: LoginComponent 
      },
      {
        path: 'home',
        component: HomeComponent
      }
    ]),
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideAuth(() => getAuth()),
    provideFirestore(() => getFirestore()),
    provideStorage(() => getStorage()),
    HotToastModule.forRoot(),
  ],
  providers: [],
  bootstrap: [AppComponent]
})


export class AppModule { }
