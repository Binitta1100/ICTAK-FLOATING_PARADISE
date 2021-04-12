import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HouseboatService } from '../houseboat.service';
import { HouseboatModel } from '../houseboat-list/houseboat.model';

@Component({
  selector: 'app-edit-houseboat',
  templateUrl: './edit-houseboat.component.html',
  styleUrls: ['./edit-houseboat.component.css']
})
export class EditHouseboatComponent implements OnInit {
  houseboatItem = new HouseboatModel( null, null, null, null, null);
  constructor(private houseboatService: HouseboatService, private router: Router) { }
  type:String;
  ngOnInit(): void {
    let houseboatId = localStorage.getItem("editHouseboatId");
    this.houseboatService.getHouseboat(houseboatId).subscribe((data)=>{
      this.houseboatItem=JSON.parse(JSON.stringify(data));
  })
  }
  checkType(){
    if(this.houseboatItem.type=='houseboat')
      this.type="day";
    else
      this.type="hour";
    return this.type;
  }

  url: any;
  onSelectFile(event) {
    if (event.target.files && event.target.files[0]) {
      var reader = new FileReader();
      reader.readAsDataURL(event.target.files[0]);
      reader.onload = (event) => {
        this.url = event.target.result;
      }
    }
  }

  EditHouseboat(){    
    this.houseboatService.editHouseboat(this.houseboatItem);   
    alert("Success");
    this.router.navigate(['houseboats']);
  }
}
