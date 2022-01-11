import { Injectable } from '@angular/core';
import { User } from '../Users';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor() { }
  
  users:User[]= [

    {
      id: "1",
      firstName: "John",
      lastName: "Smith",
      age:20,
      login:"johnsmith",
      password: "john@1234",
      isDeleted: true
    },

    {
      id: "2",
      firstName: "James",
      lastName: "Anderson",
      age:23,
      login:"jamesanderson",
      password: "james@4321",
      isDeleted: false
    },

    {
      id: "3",
      firstName: "Tom",
      lastName: "Hanks",
      age:32,
      login:"tomhanks",
      password: "tom@3456",
      isDeleted: false
    },
    {
      id: "4",
      firstName: "Angela",
      lastName: "Merkel",
      age:54,
      login:"tomhanks",
      password: "tom@3456",
      isDeleted: true
    },
    {
      id: "5",
      firstName: "Joseph",
      lastName: "Biden",
      age:66,
      login:"joebiden",
      password: "joe@911",
      isDeleted: false
    }
  ]
  isDisplay: Boolean = false;
  toggleDeleted(user: User) {
    user.isDeleted = !user.isDeleted;
  }
}

