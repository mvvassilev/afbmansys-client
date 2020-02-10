import { Component, OnInit } from '@angular/core';
import { Course } from './course.model';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css']
})
export class CourseComponent implements OnInit {

  course: Course

  // TEMP 
  id: string

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    // this.course = {
    //   id: this.route.snapshot.params['id'],
    //    ...
    // };
    
    this.id = this.route.snapshot.params['id']
  }

}
