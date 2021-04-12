import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BookingModel } from './booking.model';
import { BookingService } from '../booking.service';
import { AuthService} from '../auth.service';

@Component({
  selector: 'app-bookings',
  templateUrl: './bookings.component.html',
  styleUrls: ['./bookings.component.css']
})
export class BookingsComponent implements OnInit {
  title:String = "Bookings";
  bookings: BookingModel[];

  constructor(private bookingService: BookingService, private router:Router,private _auth: AuthService) { }

  ngOnInit(): void { 
    this.bookingService.getBookings().subscribe((data)=>{
      this.bookings=JSON.parse(JSON.stringify(data));
    })
  }

  DeleteBooking(id: String){
    this.bookingService.deleteBooking(id).subscribe(res =>{
      this.bookingService.getBookings().subscribe((data)=>{
        this.bookings=JSON.parse(JSON.stringify(data));
      })
    })
  }

}
