import { Component, OnInit, Input, ChangeDetectorRef } from '@angular/core';
import { Member } from './member/member.model';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-members',
  templateUrl: './members.component.html',
  styleUrls: ['./members.component.css']
})
export class MembersComponent implements OnInit {
  members: Member[] = []

  

  headElements = ['№', 'Име', 'ЕГН', 'Адрес', 'Регион', 'Специалност', 'Email', 'Телефон'];

  constructor(private router: Router, private http: HttpClient, private changeDetect: ChangeDetectorRef) {
    let url = "http://localhost:8080/members/all"
    this.http.get(url).toPromise().then(data => {
      console.log(data)

      for (let key in data) {
        if (data.hasOwnProperty(key))
          this.members.push(data[key]);
      }
    })
  }

  ngOnInit() {
    this.changeDetect.detectChanges()
  }

  onLoadMemberDetails(member: Member) {
    this.router.navigate([`members/${member.id}`])
  }

  onAddNewMember() {
    this.router.navigate(['new-member'])
  }
}
