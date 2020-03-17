import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Member } from '../member/member.model';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-new-member',
  templateUrl: './new-member.component.html',
  styleUrls: ['./new-member.component.css']
})
export class NewMemberComponent implements OnInit {

  personalID: string
  name: string
  phone: string
  email: string
  major: string
  mainAddress: string
  sex: string
  registerDate: string
  region: string
  membershipID: string
  workAddress: string 
  currentAddress: string
  workContractID: string
  declaration: boolean
  penaltyID: string

  diplomas: string[] //the IDs of all the member's diplomas
  degree: string
  university: string
  diplomaMajor: string // use as 'major'
  startDate: string // yyyy-mm-dd
  endDate: string // yyyy-mm-dd


  courses: string[]
  additional_qualifications: string[]


  // TEMP
  message: any
  metadataTop = [
    ['Име:', 'name', this.name],
    ['ЕГН:', 'personalID', this.personalID],
    ['Телефон:', 'phone', this.phone],
    ['Email:', 'email', this.email],
    ['Специалност:', 'major', this.major],
    ['Адрес:', 'mainAddress', this.mainAddress],
  ]

  metadataBottom = [
    ['Пол:', 'sex', this.sex],
    ['Дата:', 'registerDate', this.registerDate],
    ['Регион:', 'region', this.region],
    ['Служебен адрес:', 'workAddress', this.workAddress],
    ['Адрес за кореспонденция:', 'currentAddress', this.currentAddress]
  ]

  metadataCertificates = [
    ['Дипломи:', [
      [['степен:', ''], ['№', ''], ['учебно заведение', ''], ['специалност:', ''], ['продължителност:', '']],
    ]],
    ['Курсове:', [
      [['дата:', ''], ['№', ''], ['име:', ''], ['лектор:', '']],
    ]],
    ['Допълнителни квалификации:', [
      [['степен:', ''], ['№', ''], ['учебно заведение', ''], ['специалност:', ''], ['продължителност:', '']],
    ]],
    ['Административни наказания:', [
      [['наименование:', ''], ['валидност:', '']],
    ]]
  ]

  metadataMembership = [
    ['Сертификат за членство:', ''],
    ['Членство:', ''],
    ['Членски внос:', '']
  ]
  // TEMP - END

  constructor(private router: Router, private http: HttpClient) { }

  ngOnInit() {
  }

  onSaveNewMember() {

    let body = {
      "name" : this.name, 
      "personalID" : this.personalID,
      "major" : this.major,
      "sex" : this.sex,
      "photo" : 'PLACEHOLDER_PHOTO_URL',
      "phoneNumber" : this.phone,
      "registerDate" : this.registerDate,
      "region" : this.region,
      "membershipID" : this.membershipID,
      "registerAddress" : this.currentAddress,
      "mainAddress" : this.mainAddress,
      "workAddress" : this.workAddress,
      "email" : this.email,
      "workContractID" : this.workContractID,
      "declaration" : this.declaration,
      "penaltyID" : this.penaltyID
    };

    console.log(body)

    let url = 'http://localhost:8080/members/new'
    this.http.post(url, body, { responseType: 'text' as 'json' }).subscribe((data) => this.message = data)

    this.router.navigate(['members'])
  }
}
