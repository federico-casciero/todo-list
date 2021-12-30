import { Injectable } from "@angular/core";
import { CanActivate, Router, UrlTree } from "@angular/router";
import { Store } from "@ngrx/store";
import { map, Observable } from "rxjs";
import { isAuthenticated } from "../auth/state/auth.selector";
import { AppState } from "../state/state";

@Injectable({providedIn: 'root'})
export class AuthGuard implements CanActivate {
    
  constructor(private store: Store<AppState>, private router: Router) {}

  canActivate(): Observable<boolean> {
    return this.store.select(isAuthenticated).pipe(
      map((authenticate) => {
        if (!authenticate) {
          this.router.navigate(['login']);
          return false;
        }
        return true;
      })
    );
  }
}