import { Component, Input, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss'],
  // providers: [UserService]
})
export class UserComponent implements OnInit{
  @Input() user : { name:string ; status: string};
  @Input() id: number;
  constructor(private userService : UserService){
    
  }
  ngOnInit(): void {
    
  }

  onUpdateStatus(status:string){
    this.userService.updateStatus(this.id, status)
  }
}
