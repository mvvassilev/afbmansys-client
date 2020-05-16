import { Component, OnInit } from '@angular/core';
import { Course } from './course.model';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css']
})
export class CourseComponent implements OnInit {

  course: any

  name: string
  date: string
  lector: string

  // TEMP 
  id: string
  metadata
  title = 'Класически спортен тейпинг'
  // TEMP - END

  constructor(private route: ActivatedRoute, private router: Router, private http: HttpClient) { }

  ngOnInit() {    
    this.id = this.route.snapshot.params['id']

    let url = `http://localhost:8080/courses/${this.id}`
    this.http.get(url).toPromise().then(data => {
      console.log(data)

      for (let key in data) {
        if (data.hasOwnProperty(key))
          this.course[key] = data[key];
      }
    })

    this.course = {
      "date" : this.date,
      "name": this.name,
      "lector": this.lector,
    }
  }

  onChangeCourseDetails() {
    this.router.navigate([`courses/change/${this.id}`])
  }

  onDeleteCourse() {
    let url = `http://localhost:8080/courses/${this.id}`
    this.http.delete(url).subscribe(() => console.log("course deleted")) // IGNORE THE ERROR IN THE CONSOLE
    this.router.navigate([`courses`])
  }
}
