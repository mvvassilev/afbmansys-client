import { Component, OnInit, Input } from '@angular/core';
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

  headElements = ['№', 'Име', 'ЕГН', 'Адрес', 'Регион', 'Специалност', 'Email', 'Телефон', 'Дата'];

  constructor(private router: Router, private http: HttpClient) { 
    let url = "http://localhost:8080/members"
    this.http.get(url).toPromise().then(data => {
      console.log(data)

      for (let key in data){
        if(data.hasOwnProperty(key))
          this.members.push(data[key]);
      }
    })
  }

  ngOnInit() {
  }

  onLoadMemberDetails(member: Member) {
    this.router.navigate([`members/${member.id}`])
  }

  onAddNewMember() {
    this.router.navigate(['new-member'])
  }
}
