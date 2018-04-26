import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from './home/home.component';
import {AboutComponent} from './about/about.component';
import {HowComponent} from './how/how.component';


const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'about/:id',
    component: AboutComponent
  },
  {
    path: 'how/:test',
    component: HowComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
