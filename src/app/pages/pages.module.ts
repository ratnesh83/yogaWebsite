import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagesRoutingModule } from './pages-routing.module';
import { PagesComponent } from './pages.component';
import { AllYogaComponent } from './all-yoga/all-yoga.component';
import { OneYogaComponent } from './one-yoga/one-yoga.component';
import { HeadComponent } from './shared/head/head.component';
import { FootComponent } from './shared/foot/foot.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { TeamsComponent } from './teams/teams.component';

@NgModule({
  imports: [
    CommonModule,
    PagesRoutingModule
  ],
  declarations: [PagesComponent, AllYogaComponent, OneYogaComponent, HeadComponent, FootComponent, AboutUsComponent, ContactUsComponent, TeamsComponent]
})
export class PagesModule { }
