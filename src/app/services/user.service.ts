import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs";
import { User } from "../models/user";
import { global } from "./global";

@Injectable()
export class UserService{

    private api: string
    private token: string = ''
    private user: User

    constructor(
        public _http: HttpClient
    ){
        this.api = global.api
        this.user = new User(0, '', '' ,'ROLE_USER' ,'' , '', '', '')
    }

    register(user: User): Observable<any>{
        let json = JSON.stringify(user)
        let params = 'json='+json
        let headers = new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded')

        let url = this.api+'register'
        
        return this._http.post(url, params, {headers})
    }

    signup(user: User): Observable<any>{
        let signup: any = user
        let json = JSON.stringify(signup)

        let url = this.api+'login'
        let params = 'json='+json
        let headers = new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded')
        
        return this._http.post(url, params, {headers})
    }

    getUser(): User{
        let user = JSON.parse(localStorage.getItem('user')!)

        let url = this.api+'user/details/'+ user?.sub
        this.getToken()
        let headers = new HttpHeaders()
            .set('Content-Type', 'application/x-www-form-urlencoded')
            .set('Authorization', this.token)

        this._http.get(url, {headers}).subscribe({
            next: (response:any) => {                
                user = response.user
            },
            error: response => {
            }
        })

        return user
    }

    getToken(){
        let token = localStorage.getItem('token')!
        
        this.token = token

        return this.token
    }

    update(user: User){
        let json = JSON.stringify(user)

        let url = this.api+'user/update'
        let params = 'json='+json
        this.getToken()
        let headers = new HttpHeaders()
            .set('Content-Type', 'application/x-www-form-urlencoded')
            .set('Authorization', this.token)

        return this._http.put(url, params, {headers})
    }
}