import { Component, OnInit } from '@angular/core';
import { UsersService } from 'src/app/services/users.service';
import { User } from 'src/app/Users';

@Component({
  selector: 'app-active-list',
  templateUrl: './active-list.component.html',
  styleUrls: ['./active-list.component.css']
})
export class ActiveListComponent implements OnInit {

  constructor(public userService: UsersService) { }

  ngOnInit(): void {
  }

  toggleDeleted(user:User){
    this.userService.toggleDeleted(user);
  }
  getClass(){
    return 'green-border';
  }
}
