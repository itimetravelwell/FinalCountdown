import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from './home/home.component';
import {AboutComponent} from './about/about.component';
import {HowComponent} from './how/how.component';


const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    data: { animation: 'Home' }
  },
  {
    path: 'about/:id',
    component: AboutComponent,
    data: { animation: 'About' }
  },
  {
    path: 'how/:test',
    component: HowComponent,
    data: { animation: 'How' }
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
