import { Component, OnInit } from '@angular/core';
import { Coordinator } from './coordinator.model';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-coordinator',
  templateUrl: './coordinator.component.html',
  styleUrls: ['./coordinator.component.css']
})
export class CoordinatorComponent implements OnInit {

  coordinator: any

  username: string
  password: string
  region: string
  memberID: number

  metadata

  constructor(private route: ActivatedRoute, private router: Router, private http: HttpClient) {
  }

  ngOnInit() {
    this.memberID = this.route.snapshot.params['memberID']

    let url = `http://localhost:8080/coordinators/${this.memberID}`
    this.http.get(url).toPromise().then(data => {
      console.log(data)

      for (let key in data) {
        if (data.hasOwnProperty(key))
          this.coordinator[key] = data[key];
      }
    })

    this.coordinator = {
      "username": this.username,
      "password": this.password,
      "region": this.region
    }
  }

  onChangeCoordinatorDetails() {
    this.router.navigate([`coordinators/change/${this.memberID}`])
  }
}
