import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent implements OnInit {

  username: string
  password: string
  region: string

  coordinator: {
    "username": string,
    "memberid": string,
    "password": string,
    "region": string
  }

  entPassword: string

  constructor(private router: Router, private http: HttpClient) { }

  ngOnInit() {
  }

  onLogin() {
    let approved = false

    let url = `http://localhost:8080/coordinators/username/${this.username}`

    this.http.get(url).toPromise().then(data => {
      // console.log(data)
      console.log(`DATA_PASSWORD = ${data["password"]}`)
      this.password = data["password"]

      // authorize
      if (this.entPassword == this.password) {
        approved = true
      }

      console.log(`entPassword = ${this.entPassword}`)
      console.log(`password = ${this.password}`)

      if (approved == true) {
        this.router.navigate(['/members'])
      } else {
        alert("Грешен потребител или парола!")
      }
    })
  }
}
