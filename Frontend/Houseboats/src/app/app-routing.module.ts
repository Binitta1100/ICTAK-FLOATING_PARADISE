import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './auth.guard';
import { HouseboatListComponent } from './houseboat-list/houseboat-list.component';
import { NewHouseboatComponent } from './new-houseboat/new-houseboat.component';
import { EditHouseboatComponent } from './edit-houseboat/edit-houseboat.component';
import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';
import { BookHouseboatComponent } from './book-houseboat/book-houseboat.component';
import { BookingsComponent } from './bookings/bookings.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {path : 'houseboats', canActivate:[AuthGuard], component : HouseboatListComponent},
  {path : 'add', canActivate:[AuthGuard], component : NewHouseboatComponent},
  {path : 'edithouseboat', component : EditHouseboatComponent},
  {path : 'signup', component : SignupComponent},
  {path : 'login', component : LoginComponent},
  {path : 'bookhouseboat', component : BookHouseboatComponent},
  {path : 'bookings', component : BookingsComponent},
  {path : '', component : HomeComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
