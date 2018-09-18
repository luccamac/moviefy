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
  search = '';

  constructor(private service: MovieSearchService) { }

  ngOnInit() {
  }
  
  searchMovie() {
    this.searchOnGoing = true;
    this.searchDone = false;

    this.service.getMovie(this.search).subscribe( 
      res => { console.warn(res);
        console.log(res);
        this.resultsArray = res.Search.sort((m1, m2) => m1.Year - m2.Year);
        this.searchOnGoing = false;
        this.searchDone = true;
      },
      err => console.log(`Something went wrong: ${err}`)
    );
  }

  inputKeyUp(event)
  {
    // Cancel the default action, if needed
    event.preventDefault();
    // Number 13 is the "Enter" key on the keyboard
    if (event.keyCode === 13)
      this.searchMovie();
  }

}
