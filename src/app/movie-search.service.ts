import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})

export class MovieSearchService {

  url = 'http://www.omdbapi.com/?apikey=f48b0ce0';

  constructor(private http: Http) { }

  getMovie(name): Observable<any> {
    let query;
    query = '&s=' + name;
    console.log(this.url + query);
    return this.http.get(this.url + query).pipe(map((res: Response) => res.json()));
  }
}
