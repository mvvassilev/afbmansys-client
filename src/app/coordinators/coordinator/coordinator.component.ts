import { Component, OnInit } from '@angular/core';
import { Coordinator } from './coordinator.model';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-coordinator',
  templateUrl: './coordinator.component.html',
  styleUrls: ['./coordinator.component.css']
})
export class CoordinatorComponent implements OnInit {

  coordinator: Coordinator
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
