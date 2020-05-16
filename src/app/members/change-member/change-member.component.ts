import { Component, OnInit } from '@angular/core';
import { Member } from '../member/member.model';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-change-member',
  templateUrl: './change-member.component.html',
  styleUrls: ['./change-member.component.css']
})
export class ChangeMemberComponent implements OnInit {

  member: any

  personalID: string
  name: string
  phoneNumber: string
  email: string
  major: string
  currentAddress: string
  gender: string
  registerDate: string
  region: string
  workAddress: string
  registerAddress: string
  workContractID: string
  declaration: boolean = true
  photo: string = 'TEST_PHOTO_STRING'

  // TEMP
  id: number
  message: any


  constructor(private route: ActivatedRoute, private router: Router, private http: HttpClient) {
    this.id = this.route.snapshot.params['id']

    let url = `http://localhost:8080/members/${this.id}`
    this.http.get(url).toPromise().then(data => {
      console.log(data)

      for (let key in data) {
        if (data.hasOwnProperty(key))
          this.member[key] = data[key];
      }
    })

    this.member = {
      "name": this.name,
      "personalID": this.personalID,
      "major": this.major,
      "gender": this.gender,
      "photo": this.photo,
      "phoneNumber": this.phoneNumber,
      "email": this.email,
      "currentAddress": this.currentAddress,
      "registerDate": this.registerDate,
      "region": this.region,
      "workAddress": this.workAddress,
      "registerAddress": this.registerAddress,
      "workContractID": this.workContractID,
      "declaration": this.declaration
    }
  }

  ngOnInit() { }

  onSaveMemberDetails() {
    let url = `http://localhost:8080/members/${this.id}`

    let body = {
      "name" : this.member.name, 
      "personalID" : this.member.personalID,
      "major" : this.member.major,
      "gender" : this.member.gender,
      "photo" : this.member.photo,
      "phoneNumber" : this.member.phoneNumber,
      "registerDate" : this.member.registerDate,
      "region" : this.member.region,
      "membershipID" : this.member.membershipID,
      "registerAddress" : this.member.registerAddress,
      "currentAddress" : this.member.currentAddress,
      "workAddress" : this.member.workAddress,
      "email" : this.member.email,
      "workContractID" : this.member.workContractID,
      "declaration" : this.member.declaration
    };

    this.http.put(url, body, { responseType: 'text' as 'json' })
      .subscribe((data) => this.message = data)

    this.router.navigate([`members/${this.id}`])
  }

  onReturnToMemberView() {
    this.router.navigate([`members/${this.id}`])
  }
}
