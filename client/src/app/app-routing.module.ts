import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

import { HomeComponent } from './components/home/home.component';


const routes: Routes = [
  { path: 'home', component: HomeComponent },

  {
    path: 'module/student',
    loadChildren: './modules/student/student.module#StudentModule'
  },
  { path: '', redirectTo: 'home', pathMatch: 'full' }

  // { path: '**', component: PageNotFoundComponent },


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
