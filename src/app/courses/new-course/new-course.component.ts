import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-new-course',
  templateUrl: './new-course.component.html',
  styleUrls: ['./new-course.component.css']
})
export class NewCourseComponent implements OnInit {

  // TEMP 
  id: string
  metadata
  title = 'Класически спортен тейпинг'
  // TEMP - END

  constructor(private router: Router) { }

  ngOnInit() {
    // TEMP
    this.metadata = [
      ['№:', ''],
      ['Дата:', ''],
      ['Лектор:', ''],
    ]

    // TEMP - END
  }


  onSaveNewCourse() {
    this.router.navigate([`courses`])
  }
}
