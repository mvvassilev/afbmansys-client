import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-change-coordinator',
  templateUrl: './change-coordinator.component.html',
  styleUrls: ['./change-coordinator.component.css']
})
export class ChangeCoordinatorComponent implements OnInit {

  
  memberID: number
  username: string
  password: string
  region: string
  
  coordinator: any

  message: any

  metadata

  constructor(private route: ActivatedRoute, private router: Router, private http: HttpClient) {
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
      "memberID": this.memberID,
      "date": this.password,
      "region": this.region
    }
  }

  ngOnInit() {
  }

  onSaveCoordinatorData() {
    let url = `http://localhost:8080/coordinators/${this.username}`

    let body = {
      "username": this.coordinator.username,
      "memberid" : this.coordinator.memberID,
      "password" : this.coordinator.password,
      "region" : this.coordinator.region
    };

    this.http.put(url, body, { responseType: 'text' as 'json' })
      .subscribe((data) => this.message = data)

    this.router.navigate([`coordinators/${this.memberID}`])
  }

  onReturnToCoordinatorView(){
    this.router.navigate([`coordinators/${this.memberID}`])
  }
}
