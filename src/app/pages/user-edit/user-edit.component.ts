import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { User } from 'src/app/models/user';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-user-edit',
  templateUrl: './user-edit.component.html',
  styleUrls: ['./user-edit.component.scss'],
  providers: [UserService]
})
export class UserEditComponent implements OnInit {

  public user: User

  constructor(
    private _userService: UserService
  ) {
    this.user = _userService.getUser()
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
