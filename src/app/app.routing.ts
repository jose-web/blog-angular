import { ModuleWithProviders } from "@angular/core";
import { Route, Routes, RouterModule } from "@angular/router";

// PAGES
import { LoginComponent } from "./pages/login/login.component";
import { RegisterComponent } from "./pages/register/register.component";
import { HomeComponent } from "./pages/home/home.component";
import { CategoriesComponent } from "./pages/categories/categories.component";

const appRouters: Routes = [
    { path: '', component: HomeComponent },
    { path: 'home', component: HomeComponent },
    { path: 'login', component: LoginComponent },
    { path: 'register', component: RegisterComponent },
    { path: 'categories', component: CategoriesComponent },
    { path: '**', component: HomeComponent },
]

export const appRoutingProviders: any = []
export const routing: ModuleWithProviders<Route> = RouterModule.forRoot(appRouters)