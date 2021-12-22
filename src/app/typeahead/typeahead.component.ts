import { Component, EventEmitter, Output } from '@angular/core';
import { Observable, OperatorFunction, switchMap } from 'rxjs';
import { ImageApiService } from '../services/image-api.service';

@Component({
  selector: 'typeahead',
  templateUrl: 'typeahead.component.html',
  styles: []
})
export class TypeaheadComponent {

  constructor(private _imageApiService: ImageApiService) { }

  public model: any;
  
  @Output() public imageSelect:EventEmitter<string> = new EventEmitter<string>();

  search: OperatorFunction<string, readonly string[]> = (text$: Observable<string>) =>
    text$.pipe(
        switchMap(term => this._imageApiService.search(term)||[])
      )
  
  selectMyItem($event: { item: string}){
    this.imageSelect.emit($event.item);
  }

}
