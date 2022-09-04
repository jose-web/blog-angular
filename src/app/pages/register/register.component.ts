import { Component, OnInit } from '@angular/core';
import { FormControlDirective, FormControlStatus, NgForm } from '@angular/forms';
import { User } from 'src/app/models/user';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  public user: User

  constructor() {
    this.user = new User(0, '', '' ,'ROLE_USER' ,'' , '', '', '')
  }

  ngOnInit(): void {
  }

  onSubmit(form: NgForm){
    console.log(this.user);
    form.reset()
  }

}
