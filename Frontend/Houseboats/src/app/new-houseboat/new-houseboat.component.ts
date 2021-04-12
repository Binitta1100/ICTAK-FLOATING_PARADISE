import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HouseboatModel } from '../houseboat-list/houseboat.model';
import { HouseboatService } from '../houseboat.service';
import { AuthService} from '../auth.service';

@Component({
  selector: 'app-new-houseboat',
  templateUrl: './new-houseboat.component.html',
  styleUrls: ['./new-houseboat.component.css']
})
export class NewHouseboatComponent implements OnInit {
  title:String = "Add Houseboat";
  type:String;
  constructor(private houseboatService: HouseboatService, private router: Router, private _auth: AuthService,) { }
  houseboatItem = new HouseboatModel( null, null, null, null, null);
  ngOnInit(): void {
  }

  checkType(){
    if(this.houseboatItem.type=='houseboat')
      this.type="day";
    else
      this.type="hour";
    return this.type;
  }

  AddHouseboat(){
    this.houseboatService.newHouseboat(this.houseboatItem);
    alert("Success");
    this.router.navigate(['houseboats']);
  }
}
