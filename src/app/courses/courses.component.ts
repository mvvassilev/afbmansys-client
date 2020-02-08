import { Component, OnInit } from '@angular/core';
import { Course } from './course/course.model';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent implements OnInit {
  courses: Course[] = [
    new Course('19292', 'Класически спортен тейпинг', 'Български', new Date(2020, 4, 11), 'без'),
    new Course('19292', 'Кинезиологичен тейпинг: Курс А долен квадрант', 'Български', new Date(2020, 5, 15), 'без'),
    new Course('19292', 'PNF - I част (A)', 'Български', new Date(2020, 6, 11), 'без'),
    new Course('19292', 'Mulligan А-горен квадрант', 'Български', new Date(2020, 2, 22), 'без'),
    new Course('19292', 'Mulligan Б - долен квадрант', 'Български', new Date(2020, 7, 3), 'без')
  ]

  constructor() { }

  ngOnInit() {
  }

}
