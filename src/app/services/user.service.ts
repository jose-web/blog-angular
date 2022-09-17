import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs";
import { User } from "../models/user";
import { global } from "./global";

@Injectable()
export class UserService{

    private api: String
    constructor(
        public _http: HttpClient
    ){
        this.api = global.api
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
}