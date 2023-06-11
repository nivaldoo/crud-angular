import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppMaterialModule } from '../shared/app-material/app-material.module';

import { CourseRoutingModule } from './course-routing.module';
import { CourseComponent } from './course/course.component';


@NgModule({
  declarations: [
    CourseComponent
  ],
  imports: [
    CommonModule,
    CourseRoutingModule,
    AppMaterialModule
  ]
})
export class CourseModule { }
