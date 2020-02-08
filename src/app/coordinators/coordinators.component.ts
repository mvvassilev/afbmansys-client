import { Component, OnInit } from '@angular/core';
import { Coordinator } from './coordinator/coordinator.model';

@Component({
  selector: 'app-coordinators',
  templateUrl: './coordinators.component.html',
  styleUrls: ['./coordinators.component.css']
})
export class CoordinatorsComponent implements OnInit {
  coordinators: Coordinator[] = [
    new Coordinator('1202', 'boykaanastasova', 'asdasd', 'Западен'),
    new Coordinator('4112', 'gogo1', '61na9a', 'Източен'),
    new Coordinator('8264', 'spaiky_124', '9b5an1', 'Северен'),
    new Coordinator('7102', '88_fifa', '7ah1s4', 'Южен'),
  ]

  constructor() { }

  ngOnInit() {
  }

}
