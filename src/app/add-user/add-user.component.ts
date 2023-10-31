import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.scss']
})
export class AddUserComponent implements OnInit{

  username: string;

  constructor(private userService : UserService){

  }
  ngOnInit(): void {
   this.userService.statusUpdated.subscribe(
    (data) => {alert(data);}
   )
  }

  onAddUser(){
    this.userService.addUser(this.username , 'active');
  }
}
