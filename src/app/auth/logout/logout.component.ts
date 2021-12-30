import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { Store } from "@ngrx/store";
import { AppState } from "../../state/state";
import { logout } from "../state/auth.actions";

@Component({
    selector: 'app-logout',
    templateUrl: 'logout.component.html',
    styles: []
  })
  export class LogoutComponent implements OnInit {
  
    constructor(private store: Store<AppState>, private router: Router) {}
  
    ngOnInit(): void {}

    logout(){
      this.store.select("user");
      this.store.dispatch(logout());
      this.router.navigate(['login'])
    }
  }