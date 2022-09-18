import { Component, OnInit, DoCheck } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
  providers: [UserService]
})
export class MenuComponent implements OnInit, DoCheck {
  public user: any
  public token: any

  constructor(
    public _userService: UserService,
    public _router: Router
  ){
    this.user = _userService.getUser()
    this.token = _userService.getToken()
  }

  ngOnInit(): void {}

  ngDoCheck(){
    this.user = this._userService.getUser()
    this.token = this._userService.getToken()
  }

  logout(){
    localStorage.removeItem('user')
    localStorage.removeItem('token')

    this.user = null

    this._router.navigate(['home'])
  }

}
