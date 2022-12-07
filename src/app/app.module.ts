import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

//UTILS
import { FroalaEditorModule, FroalaViewModule } from 'angular-froala-wysiwyg';
import { AngularFileUploaderModule } from 'angular-file-uploader';

// COMPONENTS
import { AppComponent } from './app.component';
import { MenuComponent } from './components/menu/menu.component';
import { routing, appRoutingProviders } from './app.routing';

// PAGES
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { HomeComponent } from './pages/home/home.component';
import { CategoriesComponent } from './pages/categories/categories.component';
import { UserEditComponent } from './pages/user-edit/user-edit.component';

@NgModule({
  declarations: [

    // COMPONENTS
    AppComponent,
    MenuComponent,

    // PAGES
    LoginComponent,
    RegisterComponent,
    HomeComponent,
    CategoriesComponent,
    UserEditComponent
    
  ],
  imports: [
    BrowserModule,
    routing,
    FormsModule,
    HttpClientModule,
    
    //UTILS
    FroalaEditorModule, 
    FroalaViewModule,
    AngularFileUploaderModule,
  ],
  providers: [
    appRoutingProviders
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
