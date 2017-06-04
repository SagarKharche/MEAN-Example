import { Routes } from '@angular/router';
import { TasksComponent } from './tasks/tasks.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { HomeComponent } from './home/home.component';
import { ProductDetailsComponent } from './home/product-details/product-details.component';
import { CartComponent } from './cart/cart.component';


export const ROUTES: Routes = [
  { path: '', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'home', component: HomeComponent },
  { path: 'home/:id', component: ProductDetailsComponent },
  { path: 'tasks', component: TasksComponent },
  { path: 'cart', component: CartComponent }
];
