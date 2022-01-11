import { Component, OnInit } from '@angular/core';
import { UsersService } from 'src/app/services/users.service';
import { User } from 'src/app/Users';

@Component({
  selector: 'app-all-users',
  templateUrl: './all-users.component.html',
  styleUrls: ['./all-users.component.css'],
})
export class AllUsersComponent implements OnInit {
  constructor(public userService: UsersService) {}

  ngOnInit(): void {}

  currentUser: User = {} as User;

  isDisplay: Boolean = false;

  displayCard(user: User) {
    this.isDisplay = true;
    this.currentUser = user;
  }
  borderStyle(user: User): string {
    if (!user.isDeleted) {
      return 'red-border';
    } else {
      return 'green-border';
    }
  }
}
