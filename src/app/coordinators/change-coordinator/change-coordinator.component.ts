import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-change-coordinator',
  templateUrl: './change-coordinator.component.html',
  styleUrls: ['./change-coordinator.component.css']
})
export class ChangeCoordinatorComponent implements OnInit {
  // TEMP 
  id: string
  metadata
  coordinatorName = 'Бойка Анастасова'
  // TEMP - END

  constructor(private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {

    // TEMP
    this.metadata = [
      ['№:', this.id],
      ['Регион:', 'Западен'],
      ['Потребителско име:', 'boykaanastasova'],
      ['Парола:', 'asdasd'],
    ]

    // TEMP - END
  }

  /**
     * TODO: Change '0000' for id to be dynamic
     */
  onSaveCoordinatorData() {
    this.router.navigate([`coordinators/0000`])
  }
}
