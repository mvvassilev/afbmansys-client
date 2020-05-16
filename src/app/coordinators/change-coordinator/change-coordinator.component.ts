import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-change-coordinator',
  templateUrl: './change-coordinator.component.html',
  styleUrls: ['./change-coordinator.component.css']
})
export class ChangeCoordinatorComponent implements OnInit {

  coordinator: any

  memberID: number
  username: string
  password: string
  region: string

  metadata

  constructor(private route: ActivatedRoute, private router: Router, private http: HttpClient) {
    this.memberID = this.route.snapshot.params['memberID']

    let url = `http://localhost:8080/courses/${this.memberID}`
    this.http.get(url).toPromise().then(data => {
      console.log(data)

      for (let key in data) {
        if (data.hasOwnProperty(key))
          this.coordinator[key] = data[key];
      }
    })

    this.coordinator = {
      "memberID": this.memberID,
      "username": this.username,
      "date": this.password,
      "region": this.region
    }
  }

  ngOnInit() {
  }

  onSaveCoordinatorData() {
    this.router.navigate([`coordinators/${this.memberID}`])
  }
}
