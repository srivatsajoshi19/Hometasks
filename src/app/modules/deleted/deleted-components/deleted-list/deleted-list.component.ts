import { Component, OnInit } from '@angular/core';
import { UsersService } from 'src/app/services/users.service';
import { User } from 'src/app/Users';

@Component({
  selector: 'app-deleted-list',
  templateUrl: './deleted-list.component.html',
  styleUrls: ['./deleted-list.component.css']
})
export class DeletedListComponent implements OnInit {

  constructor(private userService: UsersService) { }

  ngOnInit(): void {
  }
  users:User[] = this.userService.users;
  toggleDeleted(user: User){
    this.userService.toggleDeleted(user);
  }
}
