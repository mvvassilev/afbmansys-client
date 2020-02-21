import { Component, OnInit } from '@angular/core';
import { Coordinator } from './coordinator.model';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-coordinator',
  templateUrl: './coordinator.component.html',
  styleUrls: ['./coordinator.component.css']
})
export class CoordinatorComponent implements OnInit {

  coordinator: Coordinator
  // TEMP 
  id: string
  name: string = 'Бойка Анастасова'
  metadata
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
        ['Регион:', 'Западен'],
        ['Потребителско име:', 'boykaanastasova'],
        ['Парола:', 'asdasd'],
      ]

    // TEMP - END
  }

  /**
   * TODO: Change '0000' for id to be dynamic
   */
  onChangeCoordinatorDetails() {
    this.router.navigate([`coordinators/change/0000`])
  }

}
