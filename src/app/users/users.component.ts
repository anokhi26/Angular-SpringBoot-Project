import { User } from '../user';
import { UserDataService } from '../userdata.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-users-list',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  users: User[];
  selectedUser: User;

  constructor(private dataService: UserDataService) {}

  getUsers() {
     this.dataService.getUsers().then(users => this.users = users);
  }

  ngOnInit(): void {
     this.getUsers();
  }

  onSelect(usr: User): void {
    this.selectedUser = usr;
  }
}

