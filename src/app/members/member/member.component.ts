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
  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    // this.member = {
    //   id: this.route.snapshot.params['id'],

    // };
    this.id = this.route.snapshot.params['id']
  }
}
