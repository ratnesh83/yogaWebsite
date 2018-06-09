import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PublicPagesRoutingModule } from './public-pages-routing.module';
import { PublicPagesComponent } from './public-pages.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';

@NgModule({
  imports: [
    CommonModule,
    PublicPagesRoutingModule
  ],
  declarations: [PublicPagesComponent, LoginComponent, RegisterComponent]
})
export class PublicPagesModule { }
