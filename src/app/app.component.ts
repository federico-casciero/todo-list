import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { map, Observable } from 'rxjs';
import { getUsername, isAuthenticated } from './auth/state/auth.selector';
import { AppState } from './state/state';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

  isAuthenticated: Observable<boolean> | undefined;
  username: string | undefined;
  constructor(private store: Store<AppState>){}
  
  title = 'todo-list';

  ngOnInit(): void {
      this.isAuthenticated = this.store.select(isAuthenticated);
      this.store.select(getUsername).subscribe(data=> this.username=data);
    }

}
