import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HouseboatModel } from './houseboat.model';
import { HouseboatService } from '../houseboat.service';
import { AuthService} from '../auth.service';

@Component({
  selector: 'app-houseboat-list',
  templateUrl: './houseboat-list.component.html',
  styleUrls: ['./houseboat-list.component.css']
})
export class HouseboatListComponent implements OnInit {
  
  title:String = "Houseboat List";
  houseboats: HouseboatModel[];
  constructor(private houseboatService: HouseboatService, private router:Router,private _auth: AuthService){
  }
  ngOnInit(): void {
    this.houseboatService.getHouseboats().subscribe((data)=>{
      this.houseboats=JSON.parse(JSON.stringify(data));
    })
  }

  DeleteHouseboat(id: String){
    this.houseboatService.deleteHouseboat(id).subscribe(res =>{
      this.houseboatService.getHouseboats().subscribe((data)=>{
        this.houseboats=JSON.parse(JSON.stringify(data));
      })
    })
  }

  EditHouseboat(houseboat:any){
    localStorage.setItem("editHouseboatId", houseboat._id.toString());
    this.router.navigate(['edithouseboat']);
  }

  BookHouseboat(houseboat:any){
    localStorage.setItem("bookHouseboatId", houseboat._id.toString());
    this.router.navigate(['bookhouseboat']);
  }
}
  