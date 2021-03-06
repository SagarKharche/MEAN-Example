/* Importing angular core */
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

/* Importing Services */
import { AuthenticationService} from './service/authentication.service';
import { SessionService } from './service/session.service';
import { TaskService } from './service/task.service';
import { ProductsService } from './service/products.service';

/* Importing Component */
import { AppComponent } from './app.component';
import { TasksComponent } from './tasks/tasks.component';
import { ChildTaskComponent } from './tasks/child-task/child-task.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { HomeComponent } from './home/home.component';
import { ProductDetailsComponent } from './home/product-details/product-details.component';
import { HeaderComponent } from './header/header.component';
import { CartComponent } from './cart/cart.component';

import { ROUTES } from './app.routes';

@NgModule({
  declarations: [
    AppComponent,
    TasksComponent,
    ChildTaskComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent,
    HeaderComponent,
    ProductDetailsComponent,
    CartComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(ROUTES)
  ],
  providers: [
    TaskService,
    AuthenticationService,
    SessionService,
    ProductsService
  ],
  bootstrap: [AppComponent]
})

export class AppModule {
}
