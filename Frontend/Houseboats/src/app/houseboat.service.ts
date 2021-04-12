import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HouseboatService {

  constructor(private http:HttpClient) { }
  getHouseboat(id:any){
    return this.http.get("http://localhost:3000/"+id);
  }
  getHouseboats(){
    return this.http.get("http://localhost:3000/houseboats");
  }
  newHouseboat(item){
    return this.http.post("http://localhost:3000/insert",{"houseboat":item})
      .subscribe(data => {console.log(data)})
  }
  deleteHouseboat(id:any){
    return this.http.delete("http://localhost:3000/deletehouseboat/"+id);
  }
  editHouseboat(houseboat:any)
  {
    return this.http.put("http://localhost:3000/edithouseboat", houseboat)
    .subscribe(data =>{console.log(data)})
  }
}
