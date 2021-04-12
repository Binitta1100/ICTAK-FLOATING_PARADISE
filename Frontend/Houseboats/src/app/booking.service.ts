import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BookingService {

  constructor(private http:HttpClient) { }
  
  bookHouseboat(item:any){
    return this.http.post("http://localhost:3000/bookhouseboat", {"booking":item})
    .subscribe(data =>{console.log(data)})
  }
  getBookings(){
    return this.http.get("http://localhost:3000/bookings");
  }
  deleteBooking(id:any){
    return this.http.delete("http://localhost:3000/deletebooking/"+id);
  }
}
