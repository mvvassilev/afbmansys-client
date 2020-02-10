import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Member } from './member.model';

@Component({
  selector: 'app-member',
  templateUrl: './member.component.html',
  styleUrls: ['./member.component.css']
})
export class MemberComponent implements OnInit {

  member: Member
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
  // TEMP
  /**
        public workContractID: string,
        public mainAddress: string,
        public declaration: boolean,
        public penaltyID: string
   */
  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    // this.member = {
    //   id: this.route.snapshot.params['id'],

    // };
    this.id = this.route.snapshot.params['id']
  }
}
