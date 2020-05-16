import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-change-course',
  templateUrl: './change-course.component.html',
  styleUrls: ['./change-course.component.css']
})
export class ChangeCourseComponent implements OnInit {

  // TEMP 
  id: string
  name: string
  date: string
  lector: string

  course: any

  message: any

  metadata
  title = 'Класически спортен тейпинг'
  // TEMP - END

  constructor(private route: ActivatedRoute, private router: Router, private http: HttpClient) {
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
      "name": this.name,
      "date": this.date,
      "lector": this.lector
    }
  }

  ngOnInit() {

  }

  onSaveCourseData() {
    let url = `http://localhost:8080/courses/${this.id}`

    let body = {
      "name": this.course.name,
      "date": this.course.date,
      "lector": this.course.lector
    };

    this.http.put(url, body, { responseType: 'text' as 'json' })
      .subscribe((data) => this.message = data)


    this.router.navigate([`courses/${this.id}`])
  }

  onReturnToCourseView() {
    this.router.navigate([`courses/${this.id}`])
  }
}
