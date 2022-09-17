import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
  providers: [UserService]
})
export class MenuComponent implements OnInit {
  public user: any

  constructor(
    public _userService: UserService
  ){
    this.user = _userService.getUser()
  }

  ngOnInit(): void {
  }

}
