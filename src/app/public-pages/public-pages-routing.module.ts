import { LoginComponent } from './login/login.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RegisterComponent } from './register/register.component';
import { PublicPagesComponent } from './public-pages.component';

const routes: Routes = [
  {  path: '',
  component: PublicPagesComponent,
  children:[
      {path:'',redirectTo:'login'},
      {path:'login',component:LoginComponent},
      {path:'register',component: RegisterComponent},
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PublicPagesRoutingModule { }
