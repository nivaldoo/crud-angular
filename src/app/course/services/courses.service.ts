import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Course } from '../model/course';
import { delay, first, tap } from 'rxjs/operators';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CoursesService {

  private readonly API = environment.API;

  constructor(
    private http: HttpClient
  ) { }

  list() {
    return this.http.get<Course[]>(this.API)
      .pipe(
        first(),
        delay(1000),
        tap(courses => console.log(courses))
      );
  }

  save(record: Course) {
    return this.http.post<Course>(this.API, record).pipe(first());
  }
}
