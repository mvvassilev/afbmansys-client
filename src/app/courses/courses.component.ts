import { Component, OnInit } from '@angular/core';
import { Course } from './course/course.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent implements OnInit {
  courses: Course[] = [
    new Course('19292', 'Класически спортен тейпинг', 'Български', new Date(2020, 4, 11), 'без'),
    new Course('12453', 'Кинезиологичен тейпинг: Курс А долен квадрант', 'Български', new Date(2020, 5, 15), 'без'),
    new Course('61242', 'PNF - I част (A)', 'Български', new Date(2020, 6, 11), 'без'),
    new Course('99012', 'Mulligan А-горен квадрант', 'Български', new Date(2020, 2, 22), 'без'),
    new Course('39795', 'Класически спортен тейпинг', 'Български', new Date(2020, 4, 11), 'без'),
    new Course('59296', 'Кинезиологичен тейпинг: Курс А долен квадрант', 'Български', new Date(2020, 5, 15), 'без'),
    new Course('19498', 'PNF - I част (A)', 'Български', new Date(2020, 6, 11), 'без'),
    new Course('39232', 'Mulligan А-горен квадрант', 'Български', new Date(2020, 2, 22), 'без'),
    new Course('69595', 'Класически спортен тейпинг', 'Български', new Date(2020, 4, 11), 'без'),
    new Course('79248', 'Кинезиологичен тейпинг: Курс А долен квадрант', 'Български', new Date(2020, 5, 15), 'без'),
    new Course('89210', 'PNF - I част (A)', 'Български', new Date(2020, 6, 11), 'без'),
    new Course('89491', 'Mulligan А-горен квадрант', 'Български', new Date(2020, 2, 22), 'без'),
    new Course('29237', 'Mulligan Б - долен квадрант', 'Български', new Date(2020, 7, 3), 'без')
  ]

  constructor(private router: Router) { }

  ngOnInit() {
  }

  onLoadCourseDetails(course: Course) {
    this.router.navigate([`courses/${course.id}`])
  }

  onAddNewCourse() {
    this.router.navigate(['new-course'])
  }
}
