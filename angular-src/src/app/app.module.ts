import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import {RouterModule,Routes} from '@angular/router';
import { RegisterComponent } from './components/register/register.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/home/home.component';
import { ProfileComponent } from './components/profile/profile.component';
import { ShoppingCartComponent } from './components/shopping-cart/shopping-cart.component';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppComponent } from './app.component';
import{ValidateService} from './services/validate.service';
import{FlashMessagesModule} from 'angular2-flash-messages';
import {AuthService} from './services/auth.service';
import {AuthGuard} from './guards/auth.guard';
import { ImageUploadComponent } from './helpers/image-upload/image-upload.component';
import { ContactUsComponent } from './components/contact-us/contact-us.component';
import { AgmCoreModule } from '@agm/core';
import { PaymentPlansComponent } from './components/payment-plans/payment-plans.component';
import { ArchwizardModule } from 'ng2-archwizard';
import { GalleryComponent } from './components/gallery/gallery.component';
import { NgxGalleryModule } from 'ngx-gallery';
import { NouisliderModule } from 'ng2-nouislider';

const appRoutes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'login', component: LoginComponent},
 {path: 'profile', component: ProfileComponent, canActivate:[AuthGuard]},
 {path:'shopping_cart', component: ShoppingCartComponent, canActivate:[AuthGuard]},
 {path:'contact-us', component: ContactUsComponent, canActivate:[AuthGuard]},
 {path:'payment-plans',component:PaymentPlansComponent, canActivate:[AuthGuard]},
 {path:'gallery',component:GalleryComponent}

];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    RegisterComponent,
    ProfileComponent,
    NavbarComponent,
    ShoppingCartComponent,
    ImageUploadComponent,
    ContactUsComponent,
    PaymentPlansComponent,
    GalleryComponent
  ],
  imports: [
    BrowserModule,
    NgxGalleryModule,
    ArchwizardModule,
    NgbModule,
    NouisliderModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyBr-tgUtpm8cyjYVQDrjs8YpZH7zBNWPuY'
  }),
    FormsModule,
    HttpModule,
    FlashMessagesModule,
    NgbModule.forRoot(),
    NouisliderModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [ValidateService,AuthService,AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
