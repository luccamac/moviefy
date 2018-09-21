import { Component, OnInit } from '@angular/core';
import { MovieSearchService } from 'src/app/movie-search.service';
import { Observable } from 'rxjs';
import { LowerCasePipe } from '@angular/common';

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
  totalPages = 0;
  actualSearch = '';

  constructor(private service: MovieSearchService) { }

  ngOnInit() {
  }

  searchMovie() {
    this.service.resetIndex();
    this.actualSearch = this.search;
    this.doRequest();
  }

  private doRequest() {
    this.searchOnGoing = true;
    this.searchDone = false;
    this.service.getMovie(this.actualSearch.trim().toLocaleLowerCase()).subscribe(res => {
      console.log(res);
      if (!res.Search) {
        this.error = 'Filme não encontrado.';
        this.resultsArray = [];
        this.totalPages = 0;
        this.service.resetIndex();
      }
      else {
        this.error = '';
        this.totalPages = Math.ceil(res.totalResults / 10);
      }
      this.resultsArray = res.Search.sort((m1, m2) => m1.Year - m2.Year);
      this.searchOnGoing = false;
      this.searchDone = true;
    }, err => this.error = 'Erro de conexão.');
  }

  changePage()
  {
    this.doRequest();
  }

  showNextButton():boolean{
    return ((this.service.pageIndex + 1) <= this.totalPages);
  }
  showPrevButton():boolean{
    return ((this.service.pageIndex) > 1);
  }
  showPageNav():boolean{
    return (this.searchOnGoing || this.searchDone) && this.totalPages > 0;
  }
  
  nextPage(){
    if((this.service.pageIndex + 1) <= this.totalPages){
      this.service.incrementIndex();
      this.changePage();
    }
  }

  prevPage(){
      this.service.decrementIndex();
      this.changePage();
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
