import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user';
import { UserService } from 'src/app/services/user.service';
import { NgForm } from '@angular/forms';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  providers: [ UserService ]
})
export class LoginComponent implements OnInit {

  public user: User
  public token: String = ''
  public identity: String = ''

  constructor(
    private _userService: UserService
  ) {
    this.user = new User(0, '', '' ,'ROLE_USER' ,'' , '', '', '')
  }

  ngOnInit(): void {
  }

  onSubmit(form: NgForm){
    this._userService.signup(this.user).subscribe({
      next: response => {
        if(response.status == 'success'){
          this.token = response.token
          this.identity = response.user

          localStorage.setItem('token', response.token)
          localStorage.setItem('user', JSON.stringify(response.user))
        }
      },
      error: response => {
        console.log(response);
      }
    })
  }
}
