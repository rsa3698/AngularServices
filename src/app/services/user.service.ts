import { EventEmitter, Injectable } from '@angular/core';
import { LogService } from './logging.service';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private logService : LogService) { }

  users = [
    { name: 'Raudra' , status : 'Active'},
    { name: 'Sankar' , status : 'Active'},
    { name: 'Adak' , status : 'Active'}
  ]

  statusUpdated = new EventEmitter<string>();

  addUser(name : string , status : string){
    this.users.push({name , status})
    this.logService.logStatus(status);
  }

  updateStatus(id: number , status: string){
    this.users[id].status = status;
    this.statusUpdated.emit(status);
    this.logService.logStatus(status);
  }
}
