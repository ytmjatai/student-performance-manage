import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StudentRoutingModule } from './student-routing.module';
import { HomeComponent } from './components/home/home.component';
import { ListComponent } from './components/list/list.component';
import { AddComponent } from './components/add/add.component';

@NgModule({
  declarations: [
    HomeComponent,
    ListComponent,
    AddComponent
  ],
  imports: [
    CommonModule,
    StudentRoutingModule
  ],
  exports: []
})
export class StudentModule { }
