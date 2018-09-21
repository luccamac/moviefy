import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})

export class MovieSearchService {

  url = 'http://www.omdbapi.com/?apikey=f48b0ce0';
  pageIndex = 1;

  constructor(private http: Http) { }

  getMovie(name): Observable<any> {
    let query;
    query = '&s=' + name + '&page=' + this.pageIndex;
    console.log(this.url + query);
    return this.http.get(this.url + query).pipe(map((res: Response) => res.json()));
  }

  incrementIndex(){
    if (this.pageIndex<100)
      this.pageIndex = this.pageIndex + 1;
  }
  decrementIndex(){    
    if (this.pageIndex>1)
      this.pageIndex = this.pageIndex - 1;
  }
  resetIndex(){
    this.pageIndex=1;
  }
}
