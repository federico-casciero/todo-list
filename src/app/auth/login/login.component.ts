import { Component, OnInit } from "@angular/core";
import { User } from "../../types/userType";
import { Store } from "@ngrx/store";
import { AppState } from "../../state/state";
import { login } from "../state/auth.actions";
import { Router } from "@angular/router";
import { GoogleLoginProvider, SocialAuthService, SocialUser } from "angularx-social-login";

@Component({
    selector: 'app-login',
    templateUrl: 'login.component.html',
    styles: []
  })
  export class LoginComponent implements OnInit {
  
    constructor(private store: Store<AppState>, private router: Router, private authService: SocialAuthService) {}
  
    ngOnInit(): void {}

    authenticate(username: string, password: string){
        const user: User ={
          name: username,
          authToken: password
        };
        this.store.select("user");
        this.store.dispatch(login({user}));
        this.router.navigate(['todoList'])
    }

    googleSingIn(){
      this.authService.signIn(GoogleLoginProvider.PROVIDER_ID)
      this.authService.authState.subscribe( user=>{
        this.authenticate(user.name,user.authToken)
      })
    }
  }