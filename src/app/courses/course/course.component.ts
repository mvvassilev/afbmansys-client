import { Component, OnInit } from '@angular/core';
import { Course } from './course.model';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Member } from 'src/app/members/member/member.model';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css']
})
export class CourseComponent implements OnInit {

  course: any

  membersIDsInCourse = []
  members: Member[] = []
  member: any

  // MEMBERS DATA
  personalID: string
  memname: string
  phone: string
  email: string
  major: string
  registerAddress: string
  gender: string
  registerDate: string
  region: string
  membershipID: string
  workAddress: string
  currentAddress: string
  workContractID: string
  declaration: boolean
  penaltyID: string



  // COURSE DATA
  name: string
  date: string
  lector: string

  id: string
  metadata

  constructor(private route: ActivatedRoute, private router: Router, private http: HttpClient) { }

  ngOnInit() {
    this.id = this.route.snapshot.params['id']

    let url = `http://localhost:8080/courses/${this.id}`
    this.http.get(url).toPromise().then(data => {
      for (let key in data) {
        if (data.hasOwnProperty(key))
          this.course[key] = data[key];
      }
    })

    this.course = {
      "date": this.date,
      "name": this.name,
      "lector": this.lector,
    }

    url = `http://localhost:8080/membercourses/courseID/${this.id}`

    this.http.get(url).toPromise().then(data => {
      for (let key in data) {
        if (data.hasOwnProperty(key)){
          this.membersIDsInCourse.push(data["memberID"]);
        }
      }
      console.log(data)
      console.log(this.membersIDsInCourse)
    })

    // ########### GET ALL MEMBERS #################
    for (let memc of this.membersIDsInCourse) {
      console.log(`MEMC = ${memc}`)
      let url = `http://localhost:8080/members/${memc}`

      this.http.get(url).toPromise().then(data => {
        for (let key in data) {
          if (data.hasOwnProperty(key))
            this.member[key] = data[key];
        }
      })

      this.member = {
        "name": this.memname,
        "personalID": this.personalID,
        "major": this.major,
        "gender": this.gender,
        "photo": 'PLACEHOLDER_PHOTO_URL',
        "phoneNumber": this.phone,
        "registerDate": this.registerDate,
        "region": this.region,
        "membershipID": this.membershipID,
        "registerAddress": this.registerAddress,
        "currentAddress": this.currentAddress,
        "workAddress": this.workAddress,
        "email": this.email,
        "workContractID": this.workContractID,
        "declaration": this.declaration,
        "penaltyID": this.penaltyID
      }

      this.members.push(this.member)
    }
  }

  onChangeCourseDetails() {
    this.router.navigate([`courses/change/${this.id}`])
  }

  onDeleteCourse() {
    let url = `http://localhost:8080/courses/${this.id}`
    this.http.delete(url).subscribe(() => console.log("course deleted")) // IGNORE THE ERROR IN THE CONSOLE
    this.router.navigate([`courses`])
  }
}
