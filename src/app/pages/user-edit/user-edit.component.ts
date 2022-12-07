import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { User } from 'src/app/models/user';
import { UserService } from 'src/app/services/user.service';
import { global } from 'src/app/services/global';

@Component({
  selector: 'app-user-edit',
  templateUrl: './user-edit.component.html',
  styleUrls: ['./user-edit.component.scss'],
  providers: [UserService]
})
export class UserEditComponent{

  public user: User
  public status = ''
  public urlApi = global.api
  public afuConfig:any = {
    multiple: false,
    formatsAllowed: ".jpg, .png, .gif, .jpeg",
    maxSize: "50",
    uploadAPI:  {
      url: this.urlApi + "user/upload",
      method:"POST",
      headers: {
        "Authorization" : `${this._userService.getToken()}`
      },
    },
    theme: "attachPin",
    hideProgressBar: false,
    hideResetBtn: true,
    hideSelectBtn: false,
    replaceTexts: {
      attachPinBtn: 'Upload image'
    }
};

  constructor(
    private _userService: UserService
  ) {
    let user = this._userService.getUser()
    this.user = new User(user.id, user.name, user.surname, user.role, user.email, '', user.description, user.image)    
  }

  addImage(response: any){
    this.user.image = response.body.message
  }

  onSubmit(form: NgForm){
    this._userService.update(this.user).subscribe({
      next: (response:any) => {
        if(response.code == 200){
          this.status = response.status
          let user = {...response.user, ...response.changes}
          localStorage.setItem('user', JSON.stringify(user))
        }
      },
      error: response => {
        console.log(response)
        this.status = 'error'
      }
    })
  }
}
