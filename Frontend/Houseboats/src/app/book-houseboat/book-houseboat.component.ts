import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HouseboatService } from '../houseboat.service';
import { BookingService } from '../booking.service';
import { UserService } from '../user.service';
import { HouseboatModel } from '../houseboat-list/houseboat.model';
import { UserModel } from '../signup/user.model';
import { BookingModel } from '../bookings/booking.model';

@Component({
  selector: 'app-book-houseboat',
  templateUrl: './book-houseboat.component.html',
  styleUrls: ['./book-houseboat.component.css']
})
export class BookHouseboatComponent implements OnInit {
  title:String ="Book Houseboat";
  houseboatItem = new HouseboatModel( null, null, null, null, null);
  userItem = new UserModel( null, null, null);
  bookingItem = new BookingModel( null, null, null, null, null,null);
  constructor(private houseboatService: HouseboatService, private userService: UserService, private bookingService: BookingService, private router: Router) { }
  
  ngOnInit(): void {
    let bookhouseboatId = localStorage.getItem("bookHouseboatId");
    this.houseboatService.getHouseboat(bookhouseboatId).subscribe((data)=>{
      this.houseboatItem=JSON.parse(JSON.stringify(data));
    })
    let useremail = localStorage.getItem("UserEmail");
    this.userService.getUser(useremail).subscribe((data)=>{
      this.userItem=JSON.parse(JSON.stringify(data));
    })
  }
  BookHouseboat(){
    this.bookingItem.bookpersonname = this.userItem.username;
    this.bookingItem.bookpersonemail = this.userItem.email;
    this.bookingItem.bookhouseboatid = this.houseboatItem.houseboatid;
    this.bookingItem.booktype = this.houseboatItem.type;
    this.bookingService.bookHouseboat(this.bookingItem);   
    alert("Success");
    this.router.navigate(['houseboats']);
  }
}
