import { Component, OnInit } from "@angular/core";
import { User } from "../../types/userType";
import { Store } from "@ngrx/store";
import { AppState } from "../../state/state";
import { login } from "../state/auth.actions";
import { Router } from "@angular/router";

@Component({
    selector: 'app-login',
    templateUrl: 'login.component.html',
    styles: []
  })
  export class LoginComponent implements OnInit {
  
    constructor(private store: Store<AppState>, private router: Router) {}
  
    ngOnInit(): void {}

    authenticate(username: string, password: string){
        const user: User ={
            username: username,
            password: password
        };
        this.store.select("user");
        this.store.dispatch(login({user}));
        this.router.navigate(['todoList'])
    }
  }