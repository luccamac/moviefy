import { Component, OnInit } from '@angular/core';
import { MovieSearchService } from 'src/app/movie-search.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})

export class SearchComponent implements OnInit {

  tableContent = '';
  searchOnGoing = false;
  searchDone = false;
  resultsArray = [];
  search = 'Cinderella';

  constructor(private service: MovieSearchService) { }

  ngOnInit() {
  }

  searchMovie() {
    this.searchOnGoing = true;
    this.searchDone = false;

    this.service.getMovie(this.search).subscribe( 
      res => { console.warn(res);
        console.log(res);
        this.resultsArray = res.Search;
        this.searchOnGoing = false;
        this.searchDone = true;
      },
      err => console.log(`Something went wrong: ${err}`)
    );
  }

}
