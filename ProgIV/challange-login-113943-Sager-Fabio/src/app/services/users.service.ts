import { Injectable } from '@angular/core';
import { User } from '../classes/user';
import { Credentials } from '../classes/credentials';
import { Menu } from '../classes/menu';
import { MenusService } from './menus.service';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  users: User[] = [
    {
      username: '113943@frc.utn.edu.ar',
      dni: 11394322n,
      name: 'fabio',
      deletedMenusIds: []
    }
  ];
  logedUserIndex: number = 0;

  constructor(private menusService: MenusService) { }

  validateCredentials(credentials: Credentials): boolean
  {
    let isValidUser = false;
    let logedUserIndex = NaN;
    this.users.forEach(function (user, index) {
      if (user.dni == BigInt(credentials.password) && credentials.username == user.username){
        isValidUser =  true;
        logedUserIndex = index;
      }
    })
    this.logedUserIndex = logedUserIndex;
    return isValidUser;
  }

  getLogedUserName(): string {
    if(!Number.isNaN(this.logedUserIndex))
      if(this.users.at(this.logedUserIndex) != undefined)
        return this.users[this.logedUserIndex].name; 
    return "";
  }

  getLogedUserMenus(): Menu[] {
    let menus = this.menusService.getMenus();
    let usersDeletedMenusIds = this.users[this.logedUserIndex].deletedMenusIds.slice();
    menus.forEach(function (menu, index) {
      if(usersDeletedMenusIds.includes(menu.id)){
        menus.splice(index, 1);
      }
    })
    return menus;
  }

  deleteALogedUserMenu(menu: Menu): void {
    this.users[this.logedUserIndex].deletedMenusIds.push(menu.id);
  }
}
   
