import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-new-course',
  templateUrl: './new-course.component.html',
  styleUrls: ['./new-course.component.css']
})
export class NewCourseComponent implements OnInit {

  // TEMP 
  id: string
  date: string
  name: string
  lector: string

  message: any
  metadata
  title = 'Класически спортен тейпинг'
  // TEMP - END

  constructor(private router: Router, private http: HttpClient) { }

  ngOnInit() {
    // TEMP
    this.metadata = [
      ['Дата:', "this.date"],
      ['Лектор:', "this.lector"],
    ]

    // TEMP - END
  }

  onSaveNewCourse() {
    let body = {
      "date": this.date,
      "name": this.name,
      "lector": this.lector
    };

    console.log(body)

    let url = 'http://localhost:8080/courses/new'
    this.http.post(url, body, { responseType: 'text' as 'json' }).subscribe((data) => this.message = data)

    this.router.navigate([`courses`])
  }
}
