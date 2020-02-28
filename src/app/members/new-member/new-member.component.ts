import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-new-member',
  templateUrl: './new-member.component.html',
  styleUrls: ['./new-member.component.css']
})
export class NewMemberComponent implements OnInit {

  // TEMP
  id: string
  metadataTop = [
    ['Чл. номер:', ''],
    ['ЕГН:', ''],
    ['Име:', ''],
    ['Телефон:', ''],
    ['Email:', ''],
    ['Специалност:', ''],
    ['Адрес:', ''],
  ]

  metadataBottom = [
    ['Пол:', ''],
    ['Дата:', ''],
    ['Регион:', ''],
    ['Служебен адрес:', ''],
    ['Адрес за кореспонденция:', '']
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

  constructor(private router: Router) { }

  ngOnInit() {
  }

  onSaveNewMember(){
    //TODO: Save member logic
    this.router.navigate(['members'])
  }
}
