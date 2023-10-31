import { Component } from '@angular/core';
import { UserService } from './services/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  // providers:[UserService]
})
export class AppComponent {
  title = 'AngularServicesRoutingForms';
  users : { name: string ; status : string}[] = [];

  constructor(private userService : UserService){
    this.users = this.userService.users;
  }
}
