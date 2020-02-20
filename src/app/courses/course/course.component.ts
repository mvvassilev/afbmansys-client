import { Component, OnInit } from '@angular/core';
import { Course } from './course.model';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css']
})
export class CourseComponent implements OnInit {

  course: Course

  // TEMP 
  id: string
  metadata
  title = 'Класически спортен тейпинг'
  // TEMP - END

  constructor(private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    // this.course = {
    //   id: this.route.snapshot.params['id'],
    //    ...
    // };
    
    this.id = this.route.snapshot.params['id'],

    // TEMP
    this.metadata = [
      ['№:', this.id],
      ['Дата:', '03/02/2020'],
      ['Лектор:', 'доц.Иванов'],
    ]

    // TEMP - END
  }

  /**
   * TODO: Change '0000' for id to be dynamic
   */
  onChangeCourseDetails() {
    this.router.navigate([`courses/change/0000`])
  }

}
