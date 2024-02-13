import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListComponent } from './list/list.component';
import { AddComponent } from './add/add.component';
import { EditComponent } from './edit/edit.component';
import { LoginSignupComponent } from './login-signup/login-signup.component';
import { AuthGuard } from './auth.guard';



const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  {path:'blist',component:ListComponent,canActivate: [AuthGuard] },
  {path:'add',component:AddComponent,canActivate: [AuthGuard]},
  {path: 'edit/:id', component:EditComponent,canActivate: [AuthGuard]},
  // {path: 'login/signup', component:LoginSignupComponent}
  {path:'login',component:LoginSignupComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
