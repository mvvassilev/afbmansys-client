import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { Course } from './course/course.model';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent implements OnInit {
  courses: Course[] = []

  constructor(private router: Router, private http: HttpClient, private changeDetect: ChangeDetectorRef) { 
    let url = "http://localhost:8080/courses/all"
    this.http.get(url).toPromise().then(data => {
      console.log(data)

      for (let key in data) {
        if (data.hasOwnProperty(key))
          this.courses.push(data[key]);
      }
    })
  }

  ngOnInit() {
  }

  onLoadCourseDetails(course: Course) {
    this.router.navigate([`courses/${course.id}`])
  }

  onAddNewCourse() {
    this.router.navigate(['new-course'])
  }
}
