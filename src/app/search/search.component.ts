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
  error = '';

  constructor(private service: MovieSearchService) { }

  ngOnInit() {
  }
  
  searchMovie() {
    this.searchOnGoing = true;
    this.searchDone = false;

    this.service.getMovie(this.search).subscribe( 
      res => { 
        if (!res.Search) {
          this.error = 'Filme não encontrado.';
          return;
        }
        this.error = '';
        this.resultsArray = res.Search.sort((m1, m2) => m1.Year - m2.Year);
        this.searchOnGoing = false;
        this.searchDone = true;
      },
      err => this.error = 'Erro de conexão.'
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
