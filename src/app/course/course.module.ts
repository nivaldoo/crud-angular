import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTableModule } from '@angular/material/table';

import { CourseRoutingModule } from './course-routing.module';
import { CourseComponent } from './course/course.component';


@NgModule({
  declarations: [
    CourseComponent
  ],
  imports: [
    CommonModule,
    CourseRoutingModule,
    MatTableModule
  ]
})
export class CourseModule { }
