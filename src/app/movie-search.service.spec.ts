import { TestBed } from '@angular/core/testing';

import { MovieSearchService } from './movie-search.service';

describe('MovieSearchService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MovieSearchService = TestBed.get(MovieSearchService);
    expect(service).toBeTruthy();
  });
});
