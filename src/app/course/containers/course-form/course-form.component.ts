import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { CoursesService } from '../../services/courses.service';
import { EMPTY, catchError } from 'rxjs';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Location } from '@angular/common';
import { Course } from '../../model/course';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-course-form',
  templateUrl: './course-form.component.html',
  styleUrls: ['./course-form.component.scss']
})
export class CourseFormComponent implements OnInit {

  form = this.formBuilder.group({
    _id: [''],
    name: [''],
    category: ['']
  });

  constructor(
    private formBuilder: FormBuilder,
    private service: CoursesService,
    private snackBar: MatSnackBar,
    private location: Location,
    private route: ActivatedRoute) {

  }

  ngOnInit(): void {
    const course: Course = this.route.snapshot.data["course"];
    this.form.setValue({
      _id: course._id,
      name: course.name,
      category: course.category
    });
  }

  onSubmit() {
    this.service.save(this.form.value).pipe(
      catchError(err => {
        this.onError();
        return EMPTY;
      })).subscribe(next =>
        this.onSuccess()
      );
  }

  onCancel() {
    this.location.back();
  }

  private onError(){
    this.snackBar.open('Erro ao salvar o curso.', '', { duration: 2000 });
  }

  private onSuccess(){
    this.snackBar.open('Curso salvo com sucesso.', '', { duration: 2000 });
    this.onCancel();
  }

}
