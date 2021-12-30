import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { StoreModule } from '@ngrx/store';

import { AppRoutingModule, routingComponents } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthReducer } from './auth/state/auth.reducer';
import { TodoService } from './services/todo.service';
import { TypeaheadComponent } from './typeahead/typeahead.component';
import { StoreDevtoolsModule } from '@ngrx/store-devtools'
import { environment } from 'src/environments/environment';
import { EffectsModule } from '@ngrx/effects';

const REDUCER = {
  user: AuthReducer
}

@NgModule({
  declarations: [
    AppComponent,
    TypeaheadComponent,
    routingComponents
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgbModule,
    FormsModule,
    StoreModule.forRoot(REDUCER),
    StoreDevtoolsModule.instrument({
      logOnly: environment.production
    }),
    EffectsModule.forRoot([])
  ],
  providers: [TodoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
