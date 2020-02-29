import { Component, OnInit, Input } from '@angular/core';
import { Member } from './member/member.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-members',
  templateUrl: './members.component.html',
  styleUrls: ['./members.component.css']
})
export class MembersComponent implements OnInit {
  members: Member[] = [
    new Member('0401', 'Момчил Василев', '9708137141', 'Кинезитерапевт', 'мъж', 'src/app/images/test-img.png', '0886744800', '2020/4/11', 'Западен', '0001', 'София, Филиповци, ул.Люлин 22', 'София, Филиповци, ул.Люлин 22', 'София, Филиповци, ул.Люлин 22', 'm.v.vassilev@abv.bg', 'EK-14K309', true, '01010100101'),
    new Member('0032', 'Бойка Анастасова', '7312237055', 'Рехабилитатор', 'жена', 'src/app/images/test-img.png', '0887620143', '2020/4/11', 'Западен', '0002', 'София, Филиповци, ул.Люлин 22', 'София, Филиповци, ул.Люлин 22', 'София, Филиповци, ул.Люлин 22', 'boykaanastasova@abv.bg', 'ET-141409', true, '01460107101'),
    new Member('4001', 'Васил Василев', '9708137141', 'Кинезитерапевт', 'мъж', 'src/app/images/test-img.png', '0886744800', '2020/4/11', 'Западен', '0001', 'София, Филиповци, ул.Люлин 22', 'София, Филиповци, ул.Люлин 22', 'София, Филиповци, ул.Люлин 22', 'm.v.vassilev@abv.bg', 'EK-14K309', true, '01010100101'),
    new Member('0036', 'Валери Анастасов', '7312237055', 'Рехабилитатор', 'мъж', 'src/app/images/test-img.png', '0887620143', '2020/4/11', 'Западен', '0002', 'София, Филиповци, ул.Люлин 22', 'София, Филиповци, ул.Люлин 22', 'София, Филиповци, ул.Люлин 22', 'boykaanastasova@abv.bg', 'ET-141409', true, '01460107101'),
    new Member('0091', 'Момчил Василев', '9708137141', 'Рехабилитатор', 'мъж', 'src/app/images/test-img.png', '0886744800', '2020/4/11', 'Западен', '0001', 'София, Филиповци, ул.Люлин 22', 'София, Филиповци, ул.Люлин 22', 'София, Филиповци, ул.Люлин 22', 'm.v.vassilev@abv.bg', 'EK-14K309', true, '01010100101'),
    new Member('0214', 'Бойка Анастасова', '7312237055', 'Рехабилитатор', 'жена', 'src/app/images/test-img.png', '0887620143', '2020/4/11', 'Западен', '0002', 'София, Филиповци, ул.Люлин 22', 'София, Филиповци, ул.Люлин 22', 'София, Филиповци, ул.Люлин 22', 'boykaanastasova@abv.bg', 'ET-141409', true, '01460107101'),
    new Member('6912', 'Георги Петров', '9708137141', 'Кинезитерапевт', 'мъж', 'src/app/images/test-img.png', '0886744800', '2020/4/11', 'Западен', '0001', 'София, Филиповци, ул.Люлин 22', 'София, Филиповци, ул.Люлин 22', 'София, Филиповци, ул.Люлин 22', 'm.v.vassilev@abv.bg', 'EK-14K309', true, '01010100101'),
    new Member('0401', 'Момчил Василев', '9708137141', 'Кинезитерапевт', 'мъж', 'src/app/images/test-img.png', '0886744800', '2020/4/11', 'Западен', '0001', 'София, Филиповци, ул.Люлин 22', 'София, Филиповци, ул.Люлин 22', 'София, Филиповци, ул.Люлин 22', 'm.v.vassilev@abv.bg', 'EK-14K309', true, '01010100101'),
    new Member('0032', 'Бойка Анастасова', '7312237055', 'Рехабилитатор', 'жена', 'src/app/images/test-img.png', '0887620143', '2020/4/11', 'Западен', '0002', 'София, Филиповци, ул.Люлин 22', 'София, Филиповци, ул.Люлин 22', 'София, Филиповци, ул.Люлин 22', 'boykaanastasova@abv.bg', 'ET-141409', true, '01460107101'),
    new Member('4001', 'Васил Василев', '9708137141', 'Кинезитерапевт', 'мъж', 'src/app/images/test-img.png', '0886744800', '2020/4/11', 'Западен', '0001', 'София, Филиповци, ул.Люлин 22', 'София, Филиповци, ул.Люлин 22', 'София, Филиповци, ул.Люлин 22', 'm.v.vassilev@abv.bg', 'EK-14K309', true, '01010100101'),
    new Member('0036', 'Валери Анастасов', '7312237055', 'Рехабилитатор', 'мъж', 'src/app/images/test-img.png', '0887620143', '2020/4/11', 'Западен', '0002', 'София, Филиповци, ул.Люлин 22', 'София, Филиповци, ул.Люлин 22', 'София, Филиповци, ул.Люлин 22', 'boykaanastasova@abv.bg', 'ET-141409', true, '01460107101'),
    new Member('0091', 'Момчил Василев', '9708137141', 'Рехабилитатор', 'мъж', 'src/app/images/test-img.png', '0886744800', '2020/4/11', 'Западен', '0001', 'София, Филиповци, ул.Люлин 22', 'София, Филиповци, ул.Люлин 22', 'София, Филиповци, ул.Люлин 22', 'm.v.vassilev@abv.bg', 'EK-14K309', true, '01010100101'),
    new Member('0214', 'Бойка Анастасова', '7312237055', 'Рехабилитатор', 'жена', 'src/app/images/test-img.png', '0887620143', '2020/4/11', 'Западен', '0002', 'София, Филиповци, ул.Люлин 22', 'София, Филиповци, ул.Люлин 22', 'София, Филиповци, ул.Люлин 22', 'boykaanastasova@abv.bg', 'ET-141409', true, '01460107101'),
    new Member('6912', 'Георги Петров', '9708137141', 'Кинезитерапевт', 'мъж', 'src/app/images/test-img.png', '0886744800', '2020/4/11', 'Западен', '0001', 'София, Филиповци, ул.Люлин 22', 'София, Филиповци, ул.Люлин 22', 'София, Филиповци, ул.Люлин 22', 'm.v.vassilev@abv.bg', 'EK-14K309', true, '01010100101'),
    new Member('0401', 'Момчил Василев', '9708137141', 'Кинезитерапевт', 'мъж', 'src/app/images/test-img.png', '0886744800', '2020/4/11', 'Западен', '0001', 'София, Филиповци, ул.Люлин 22', 'София, Филиповци, ул.Люлин 22', 'София, Филиповци, ул.Люлин 22', 'm.v.vassilev@abv.bg', 'EK-14K309', true, '01010100101'),
    new Member('0032', 'Бойка Анастасова', '7312237055', 'Рехабилитатор', 'жена', 'src/app/images/test-img.png', '0887620143', '2020/4/11', 'Западен', '0002', 'София, Филиповци, ул.Люлин 22', 'София, Филиповци, ул.Люлин 22', 'София, Филиповци, ул.Люлин 22', 'boykaanastasova@abv.bg', 'ET-141409', true, '01460107101'),
    new Member('4001', 'Васил Василев', '9708137141', 'Кинезитерапевт', 'мъж', 'src/app/images/test-img.png', '0886744800', '2020/4/11', 'Западен', '0001', 'София, Филиповци, ул.Люлин 22', 'София, Филиповци, ул.Люлин 22', 'София, Филиповци, ул.Люлин 22', 'm.v.vassilev@abv.bg', 'EK-14K309', true, '01010100101'),
    new Member('0036', 'Валери Анастасов', '7312237055', 'Рехабилитатор', 'мъж', 'src/app/images/test-img.png', '0887620143', '2020/4/11', 'Западен', '0002', 'София, Филиповци, ул.Люлин 22', 'София, Филиповци, ул.Люлин 22', 'София, Филиповци, ул.Люлин 22', 'boykaanastasova@abv.bg', 'ET-141409', true, '01460107101'),
    new Member('0091', 'Момчил Василев', '9708137141', 'Рехабилитатор', 'мъж', 'src/app/images/test-img.png', '0886744800', '2020/4/11', 'Западен', '0001', 'София, Филиповци, ул.Люлин 22', 'София, Филиповци, ул.Люлин 22', 'София, Филиповци, ул.Люлин 22', 'm.v.vassilev@abv.bg', 'EK-14K309', true, '01010100101'),
    new Member('0214', 'Бойка Анастасова', '7312237055', 'Рехабилитатор', 'жена', 'src/app/images/test-img.png', '0887620143', '2020/4/11', 'Западен', '0002', 'София, Филиповци, ул.Люлин 22', 'София, Филиповци, ул.Люлин 22', 'София, Филиповци, ул.Люлин 22', 'boykaanastasova@abv.bg', 'ET-141409', true, '01460107101'),
    new Member('6912', 'Георги Петров', '9708137141', 'Кинезитерапевт', 'мъж', 'src/app/images/test-img.png', '0886744800', '2020/4/11', 'Западен', '0001', 'София, Филиповци, ул.Люлин 22', 'София, Филиповци, ул.Люлин 22', 'София, Филиповци, ул.Люлин 22', 'm.v.vassilev@abv.bg', 'EK-14K309', true, '01010100101'),
    new Member('9519', 'Бойка Анастасова', '7312237055', 'Рехабилитатор', 'жена', 'src/app/images/test-img.png', '0887620143', '2020/4/11', 'Западен', '0002', 'София, Филиповци, ул.Люлин 22', 'София, Филиповци, ул.Люлин 22', 'София, Филиповци, ул.Люлин 22', 'boykaanastasova@abv.bg', 'ET-141409', true, '01460107101')
  ]

  headElements = ['№', 'Име', 'ЕГН', 'Адрес', 'Регион', 'Специалност', 'Email', 'Телефон', 'Дата'];

  constructor(private router: Router) { }

  ngOnInit() {
  }

  onLoadMemberDetails(member: Member) {
    this.router.navigate([`members/${member.id}`])
  }

  onAddNewMember() {
    this.router.navigate(['new-member'])
  }
}
