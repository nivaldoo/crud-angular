import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Course } from '../model/course';
import { delay, first, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CoursesService {

  private readonly API = 'http://localhost:3000/courses';

  constructor(
    private http: HttpClient
  ) { }

  list() {
    return this.http.get<Course[]>(this.API)
      .pipe(
        first(),
        // delay(1000),
        tap(courses => console.log(courses))
      );
  }

  save(record: Course) {
    return this.http.post<Course>(this.API, record).pipe(first());
  }
}
