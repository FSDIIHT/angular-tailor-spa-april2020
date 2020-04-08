import { Component, OnInit } from '@angular/core';
import { AlltailorService } from '../services/alltailor.service';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-alltailor',
  templateUrl: './alltailor.component.html',
  styleUrls: ['./alltailor.component.scss']
})
export class AlltailorComponent implements OnInit {

 allTailors:any

 searchString:any

 constructor(private allTailorService:AlltailorService, private router:Router) { }

 ngOnInit() {
   this.getAllTailors()
  }

  getAllTailors(){
   
   
  }

  tailorDetailPage = function(){
    console.log();
    this.router.navigate()
  }


}
