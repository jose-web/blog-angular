import { Component, OnInit } from '@angular/core';
import { FormControlDirective, FormControlStatus, NgForm } from '@angular/forms';
import { User } from 'src/app/models/user';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
  providers: [UserService]
})
export class RegisterComponent implements OnInit {

  public user: User

  constructor(
    private _userService: UserService
  ) {
    this.user = new User(0, '', '' ,'ROLE_USER' ,'' , '', '', '')
  }

  ngOnInit(): void {
  }

  onSubmit(form: NgForm){
    this._userService.register(this.user).subscribe({
      next: response => {
        console.log(response)
        form.reset()
      },
      error: response => {
        console.log(response)
      }
    })
  }

}
