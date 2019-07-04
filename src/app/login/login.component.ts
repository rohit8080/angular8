import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { routerTransition } from '../router.animations';
import { FormsModule }   from '@angular/forms';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss'],
    animations: [routerTransition()]
})

export class LoginComponent implements OnInit {
    constructor(
      public router: Router
    ) {}

    ngOnInit() {}

    log(x){
        console.log(x);
    }

    onLoggedin() {
        console.log()
        localStorage.setItem('isLoggedin', 'true');
    }
}
