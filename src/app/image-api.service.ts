import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { IImageApi } from './imageApiType';
import { clientId } from './keys';

const _unsplashURL = 'https://api.unsplash.com/search/photos';
const PARAMS = new HttpParams({
  fromObject: {
    client_id: clientId,
    query: ''
  }
});

@Injectable({
  providedIn: 'root'
})
export class ImageApiService {

  public result: IImageApi = {
    total: 0,
    total_pages: 0,
    results: []
  };

  constructor(private http:HttpClient) { }

  search(term: string):Observable<string[]>|undefined {
    if (term === '') {
      return ;
    }

    return this.http
      .get<IImageApi>(_unsplashURL, {params: PARAMS.set('query', term)}).pipe(
        map(response => {
          var resultList : string[]=[];
          this.result=response;
          for(let result of this.result.results){
            resultList.push(result.urls.small)
          }
          return resultList;
        })
      );
  }

  randomSearch(num:string):Observable<string[]> {
    return this.http
      .get<any>('https://api.unsplash.com/photos/random?client_id='+clientId+'&count='+num).pipe(
        map(response => {
          var collection:string[]=[];
          for(let img of response){
            collection.push(img.urls.small);
          }
          return collection;
        })
      );
  }

}
