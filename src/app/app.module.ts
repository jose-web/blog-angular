import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

// COMPONENTS
import { AppComponent } from './app.component';
import { MenuComponent } from './components/menu/menu.component';
import { routing, appRoutingProviders } from './app.routing';

// PAGES
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { HomeComponent } from './pages/home/home.component';
import { CategoriesComponent } from './pages/categories/categories.component';

@NgModule({
  declarations: [

    // COMPONENTS
    AppComponent,
    MenuComponent,

    // PAGES
    LoginComponent,
    RegisterComponent,
    HomeComponent,
    CategoriesComponent
    
  ],
  imports: [
    BrowserModule,
    routing
  ],
  providers: [
    appRoutingProviders
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
