import { environment } from "src/environments/environment";

export const global = {
    api: ( environment.production ? 'https://inblog-laravel.herokuapp.com' : 'http://localhost:8000' ) + '/api/'
}