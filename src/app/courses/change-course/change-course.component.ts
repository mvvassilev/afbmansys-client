import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-change-course',
  templateUrl: './change-course.component.html',
  styleUrls: ['./change-course.component.css']
})
export class ChangeCourseComponent implements OnInit {

  // TEMP 
  id: string
  metadata
  title = 'Класически спортен тейпинг'
  // TEMP - END

  constructor(private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {

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
  onSaveCourseData() {
    this.router.navigate([`courses/0000`])
  }
}
