import { Component, OnInit } from '@angular/core';
import { Coordinator } from './coordinator/coordinator.model';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-coordinators',
  templateUrl: './coordinators.component.html',
  styleUrls: ['./coordinators.component.css']
})
export class CoordinatorsComponent implements OnInit {
  coordinators: Coordinator[] = []

  constructor(private router: Router, private http: HttpClient) {
    let url = "http://localhost:8080/coordinators/all"
    this.http.get(url).toPromise().then(data => {
      console.log(data)

      for (let key in data) {
        if (data.hasOwnProperty(key))
          this.coordinators.push(data[key]);
      }
    })
  }

  ngOnInit() {
  }

  onLoadCoordinatorDetails(coordinator: Coordinator) {
    this.router.navigate([`/coordinators/${coordinator.memberID}`])
  }
}
