import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { User } from '../classes/user';
import { UsersService } from '../services/users.service';
import { Menu } from '../classes/menu';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  user: string = "";
  userMenus: Menu[] = [];
  displayMenu: boolean = false;
  @Output() onLogOut = new EventEmitter();

  constructor(private usersService: UsersService){

  }

  ngOnInit(): void {
    this.user = this.usersService.getLogedUserName();
    this.userMenus = this.usersService.getLogedUserMenus();
  }

  deleteMenu(menu: Menu): void{
    this.userMenus = this.userMenus.filter(item => item != menu);
    this.usersService.deleteALogedUserMenu(menu);
  }

  logOut(): void{
    this.onLogOut.emit();
  }
}
