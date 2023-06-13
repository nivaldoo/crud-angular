import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { CoursesService } from '../../services/courses.service';
import { EMPTY, catchError } from 'rxjs';
import { MatSnackBar } from '@angular/material/snack-bar';
<<<<<<< HEAD
import { Location } from '@angular/common';
=======
>>>>>>> f9932a44cc3820951af7286c7bba0cb02658042d

@Component({
  selector: 'app-course-form',
  templateUrl: './course-form.component.html',
  styleUrls: ['./course-form.component.scss']
})
export class CourseFormComponent implements OnInit {

  form: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private service: CoursesService,
<<<<<<< HEAD
    private snackBar: MatSnackBar,
    private location: Location) {
=======
    private snackBar: MatSnackBar) {
>>>>>>> f9932a44cc3820951af7286c7bba0cb02658042d
    this.form = this.formBuilder.group({
      name: [null],
      category: [null]
    });
  }

  ngOnInit(): void {
  }

  onSubmit() {
    this.service.save(this.form.value).pipe(
      catchError(err => {
        this.onError();
        return EMPTY;
<<<<<<< HEAD
      })).subscribe(next =>
        this.onSuccess()
=======
      })).subscribe(
        next => console.log(next)
>>>>>>> f9932a44cc3820951af7286c7bba0cb02658042d
      );
  }

  onCancel() {
<<<<<<< HEAD
    this.location.back();
=======

>>>>>>> f9932a44cc3820951af7286c7bba0cb02658042d
  }

  private onError(){
    this.snackBar.open('Erro ao salvar o curso.', '', { duration: 2000 });
  }

<<<<<<< HEAD
  private onSuccess(){
    this.snackBar.open('Curso salvo com sucesso.', '', { duration: 2000 });
    this.onCancel();
  }

=======
>>>>>>> f9932a44cc3820951af7286c7bba0cb02658042d
}
