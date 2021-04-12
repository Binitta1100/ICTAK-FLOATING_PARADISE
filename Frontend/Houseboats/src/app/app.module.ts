import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HouseboatListComponent } from './houseboat-list/houseboat-list.component';
import { NewHouseboatComponent } from './new-houseboat/new-houseboat.component';
import { EditHouseboatComponent } from './edit-houseboat/edit-houseboat.component';
import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';
import { AuthService } from './auth.service';
import { TokenInterceptorService } from './token-interceptor.service';
import { BookHouseboatComponent } from './book-houseboat/book-houseboat.component';
import { BookingsComponent } from './bookings/bookings.component';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HouseboatListComponent,
    NewHouseboatComponent,
    EditHouseboatComponent,
    SignupComponent,
    LoginComponent,
    BookHouseboatComponent,
    BookingsComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [AuthService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptorService,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
