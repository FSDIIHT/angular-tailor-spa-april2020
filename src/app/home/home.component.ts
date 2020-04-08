import { Component, OnInit } from '@angular/core';
import { AddUserService } from '../services/add-user.service';
import { FormsModule } from "@angular/forms";


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  exportAs: 'addUserForm'
})
export class HomeComponent implements OnInit {

  addUserForm:any

  constructor(private addUserService:AddUserService) { }

  ngOnInit() {
  }

  addUserFromHomePage(){

    

}
}
