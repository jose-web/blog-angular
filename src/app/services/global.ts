import { isDevMode } from '@angular/core';

export const global = {
    api: ( isDevMode() ? 'http://localhost:8000' : 'https://inblog-laravel.herokuapp.com' ) + '/api/'
}