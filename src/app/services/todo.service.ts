import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { ToDo } from '../types/todotype';
import { HttpClient } from '@angular/common/http';
import { ImageApiService } from './image-api.service';



@Injectable({
  providedIn: 'root'
})
export class TodoService {

  private _url: string = "/assets/data/external-list.json";

  constructor(private http:HttpClient,private _imageApiService: ImageApiService) { }

  getToDoList(): Observable<ToDo[]>{
    return this.http.get<ToDo[]>(this._url).pipe(
      map( response => {
        this._imageApiService.randomSearch(response.length.toString()).subscribe(x=>{
          for(let result of response){
            result.image=x.pop()+"";
          }
        });
        return response;
      }

      )
    );
  }

}
