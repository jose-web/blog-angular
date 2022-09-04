import { ModuleWithProviders } from "@angular/core";
import { Route, Routes, RouterModule } from "@angular/router";

// PAGES
import { LoginComponent } from "./pages/login/login.component";
import { RegisterComponent } from "./pages/register/register.component";

const appRouters: Routes = [
    { path: '', component: LoginComponent },
    { path: 'home', component: LoginComponent },
    { path: 'login', component: LoginComponent },
    { path: 'register', component: RegisterComponent },
    { path: '**', component: LoginComponent },
]

export const appRoutingProviders: any = []
export const routing: ModuleWithProviders<Route> = RouterModule.forRoot(appRouters)