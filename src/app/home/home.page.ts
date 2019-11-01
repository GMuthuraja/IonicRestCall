import { Component } from '@angular/core';
import { ApiService } from '../services/api.service';
import { Router, NavigationExtras } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})

export class HomePage {

  constructor(private api: ApiService, private router: Router) { }

  getUserList() {
    this.api.userList().subscribe((res) => {  // Emission Handler

      let navigationExtrs: NavigationExtras = ({
        state: {
          results: res['data']
        }
      });
      this.router.navigate(["results"], navigationExtrs);

    }, err => { // Error Handler
      console.log(err);
    }, () => { // Complete Handler
      console.log("Completed");
    });
  }

  getUserListPromise() {
    this.api.userList().toPromise().then(response => {
      console.log(response);
    }).catch(error => {
      console.log(error);
    })
  }

  addUser() {
    this.api.addNewUser().subscribe((res) => {
      console.log(res);
    }, err => {
      console.log(err);
    });
  }
}
