import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-change-coordinator',
  templateUrl: './change-coordinator.component.html',
  styleUrls: ['./change-coordinator.component.css']
})
export class ChangeCoordinatorComponent implements OnInit {

  constructor(private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
  }

  /**
     * TODO: Change '0000' for id to be dynamic
     */
  onChangeCourseDetails() {
    this.router.navigate([`coordinators/change/0000`])
  }
}
