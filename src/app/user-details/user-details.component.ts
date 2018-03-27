import { User } from '../user';
import { Component, OnInit, Input } from '@angular/core';

import { UserDataService } from '../userdata.service';


@Component({
  selector: 'user-detail',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css'],
  providers: [UserDataService]
})
export class UserDetailsComponent {

   @Input() user: User;

  constructor(private userdataService: UserDataService) {}

  delete(): void {
    this.userdataService.delete(this.user.id).then(() => this.goBack());
  }

  goBack(): void {
    window.location.replace('');
  }
}


