import { Component, Input, OnInit } from '@angular/core';
import { UsersService } from 'src/app/services/users.service';
import { User } from 'src/app/Users';

@Component({
  selector: 'app-user-preview',
  templateUrl: './user-preview.component.html',
  styleUrls: ['./user-preview.component.css']
})
export class UserPreviewComponent implements OnInit {

  
  @Input() user: User;
  constructor(private userService: UsersService) { }

  // user:User = this.userService.currentUser;
  ngOnInit(): void {
  }

}
