import { OneYogaComponent } from './one-yoga/one-yoga.component';
import { AllYogaComponent } from './all-yoga/all-yoga.component';
import { PagesComponent } from './pages.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutUsComponent } from './about-us/about-us.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { TeamsComponent } from './teams/teams.component';

const routes: Routes = [
  {
    path: '',
    component: PagesComponent,
    children:[
        {path:'',redirectTo:'home'},
        {path:'home',component:AllYogaComponent},
        {path:'one/:id',component: OneYogaComponent},
        {path:'about-us',component: AboutUsComponent},
        {path:'contact-us',component: ContactUsComponent},
        {path:'teams',component: TeamsComponent},

        
    ]
}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
