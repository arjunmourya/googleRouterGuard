import { Component, OnInit } from '@angular/core';
import { AuthService } from "./../services/google-login.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public user;
  userFromDb: any;
  sub: any;
  constructor(public _auth: AuthService) {

  }

  ngOnInit() {
  }

  signIn(provider) {
    this.sub = this._auth.login(provider).subscribe(
      (data) => {
        console.log(data);
        this.user = data;
      }
    )

  }

  logout() {

    this.sub = this._auth.logout().subscribe(
      (data) => {
        console.log(data);
        this.user = null;

      }
    )
  }

}
