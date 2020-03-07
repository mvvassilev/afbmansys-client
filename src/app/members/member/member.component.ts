import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Member } from './member.model';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-member',
  templateUrl: './member.component.html',
  styleUrls: ['./member.component.css']
})
export class MemberComponent implements OnInit {

  member = {
    id: 0,
    name: "",
    personalID: "",
    major: "",
    sex: "",
    photo: "",
    phone: "",
    email: "",
    mainAddress: "",
    registerDate: "",
    region: "",
    membershipID: '',
    workAddress: "",
    currentAddress: "",
    workContractID: "",
    declaration: true,
    penaltyID: ''
  }

  // TEMP
  id: string
  metadataTop = [
    ['Чл. номер:', '0001'],
    ['ЕГН:', '9708137241'],
    ['Име:', 'Момчил Василев'],
    ['Телефон:', '0886744800'],
    ['Email:', 'm.v.vassilev@abv.bg'],
    ['Специалност:', 'Физиотерапевт'],
    ['Адрес:', 'София, кв.Филиповци, ул.Люлин 22'],
  ]

  metadataBottom = [
    ['Пол:', 'Мъж'],
    ['Дата:', '01/01/2020'],
    ['Регион:', 'Западен'],
    ['Служебен адрес:', 'София, кв.Филиповци, ул.Люлин 22'],
    ['Адрес за кореспонденция:', 'София, кв.Филиповци, ул.Люлин 22']
  ]

  metadataCertificates = [
    ['Дипломи:', [
      [['степен:', 'Бакалавър'], ['№', 'ТК-32004821'], ['учебно заведение', 'Софийски университет'], ['специалност:', 'Кинезитерпевт'], ['продължителност:', '2015-2020']],
      [['степен:', 'Магистър'], ['№', 'БК-72004821'], ['учебно заведение', 'Медицински университет'], ['специалност:', 'Кинезитерпевт'], ['продължителност:', '2015-2020']],
      [['степен:', 'Доктор'], ['№', 'МР-25004821'], ['учебно заведение', 'НБУ'], ['специалност:', 'Кинезитерпевт'], ['продължителност:', '2015-2020']]
    ]],
    ['Курсове:', [
      [['дата:', '11.05.2020'], ['№', 'СР-5104821'], ['име:', 'Класически спортен тейпинг'], ['лектор:', 'доц.Петров']],
      [['дата:', '11.07.2020'], ['№', 'ПФ-12004821'], ['име', 'PNF - I част (A)'], ['лектор:', 'доц.Иванов']]
    ]],
    ['Допълнителни квалификации:', [
      [['степен:', 'Бакалавър'], ['№', 'ТК-42004821'], ['учебно заведение', 'Медицински университет'], ['специалност:', 'Кинезитерпевт'], ['продължителност:', '2015-2020']],
      [['степен:', 'Магистър'], ['№', 'ТК-9104821'], ['учебно заведение', 'НБУ'], ['специалност:', 'Кинезитерпевт'], ['продължителност:', '2015-2020']]
    ]],
    ['Административни наказания:', [
      [['наименование:', 'Наказние номер едно'], ['валидност:', '2016-2017']],
      [['наименование:', 'Наказние номер две'], ['валидност:', '2017-2018']]
    ]]
  ]

  metadataMembership = [
    ['Сертификат за членство:', '...'],
    ['Членство:', '2016/2017 - 2018/2019'],
    ['Членски внос:', 'платен']
  ]
  // TEMP - END


  constructor(private route: ActivatedRoute, private router: Router, private http: HttpClient) {

    this.id = this.route.snapshot.params['id']
    let url = "http://localhost:8080/members/" + this.id
    this.http.get(url).toPromise().then(data => {
      console.log(data)

      for (let key in data) {
        if (data.hasOwnProperty(key))
          this.member[key] = data[key];
      }
    })


    console.log(this.member)
  }

  ngOnInit() { }

  /**
   * TODO: Change '0000' for id to be dynamic
   */
  onChangeMemberDetails() {
    this.router.navigate([`members/change/${this.id}`])
  }
}
