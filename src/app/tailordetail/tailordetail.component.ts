import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AlltailorService } from '../services/alltailor.service';

@Component({
  selector: 'app-tailordetail',
  templateUrl: './tailordetail.component.html',
  styleUrls: ['./tailordetail.component.scss']
})
export class TailordetailComponent implements OnInit {

  public clickedTailorid 

  oneTailor:any
  tags:any
  pics:any

  constructor(private route:ActivatedRoute, private tailorService:AlltailorService) { }

  ngOnInit() {
   
  }

  getOneTailor(id){
  
  }




}
