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

  id: string
  personalID: string
  name: string
  phone: string
  email: string
  major: string
  mainAddress: string
  sex: string
  registerDate: string
  region: string
  membershipID: string = 'TEST_MEMBERSHIP_ID'
  workAddress: string
  currentAddress: string
  workContractID: string = 'TEST_WORK_CONTRACT_ID'
  declaration: boolean = true
  penaltyID: string = 'TEST_PENALTY_ID'


  // TEMP
  metadataTop = [
    ['Чл. номер:', '', 'id'],
    ['ЕГН:', '', 'personalID'],
    ['Име:', '', 'name'],
    ['Телефон:', '', 'phone'],
    ['Email:', '', 'email'],
    ['Специалност:', '', 'major'],
    ['Адрес:', '', 'mainAddress'],
  ]

  metadataBottom = [
    ['Пол:', '', 'sex'],
    ['Дата:', '', 'registerDate'],
    ['Регион:', '', 'region'],
    ['Служебен адрес:', '', 'workAddress'],
    ['Адрес за кореспонденция:', '', 'currentAddress']
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
    //TODO: Save member logic
    // let body = {
    //   "name" : this.name, 
    //   "personalID" : this.personalID,
    //   "major" : this.major,
    //   "sex" : this.sex,
    //   "photo" : 'PLACEHOLDER_PHOTO_URL',
    //   "phoneNumber" : this.phone,
    //   "registerDate" : this.registerDate,
    //   "region" : this.region,
    //   "membershipID" : this.membershipID,
    //   "registerAddress" : this.currentAddress,
    //   "mainAddress" : this.mainAddress,
    //   "workAddress" : this.workAddress,
    //   "email" : this.email,
    //   "workContractID" : this.workContractID,
    //   "declaration" : this.declaration,
    //   "penaltyID" : this.penaltyID
    // };

    let body = {
      "name": "a",
      "personalID": "a",
      "major": "a",
      "sex": "a",
      "photo": 'PLACEHOLDER_PHOTO_URL',
      "phoneNumber": "a",
      "registerDate": "2020/11/11",
      "region": "a",
      "membershipID": "a",
      "registerAddress": "a",
      "mainAddress": "a",
      "workAddress": "a",
      "email": "a",
      "workContractID": "a",
      "declaration": "a",
      "penaltyID": "a"
    };

    console.log(body)

    let url = 'http://localhost:8080/members/new'
    this.http.post(url, body, { responseType: 'text' as 'json' })

    // this.router.navigate(['members'])
  }
}
