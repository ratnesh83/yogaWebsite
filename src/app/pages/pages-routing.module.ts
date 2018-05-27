import { OneYogaComponent } from './one-yoga/one-yoga.component';
import { AllYogaComponent } from './all-yoga/all-yoga.component';
import { PagesComponent } from './pages.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: PagesComponent,
    children:[
        {path:'',redirectTo:'home'},
        {path:'home',component:AllYogaComponent},
        {path:'one/:id',component: OneYogaComponent},
    ]
}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
