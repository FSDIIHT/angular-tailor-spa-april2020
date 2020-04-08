import { Component, OnInit } from '@angular/core';
import { AlltailorService } from '../services/alltailor.service';
import { FormsModule } from "@angular/forms";

@Component({
  selector: 'app-addtailor',
  templateUrl: './addtailor.component.html',
  styleUrls: ['./addtailor.component.scss'],
  exportAs:'addTailorForm'
})
export class AddtailorComponent implements OnInit {

  addTailorForm:any ={}


  constructor(private allTailorService:AlltailorService) { }

  ngOnInit() {
  }

  addTailor(){

    
  }

  resetAddForm(){



    
 
  }

}