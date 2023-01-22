import { Injectable } from '@angular/core';
import { Movie } from '../movieModel';
import { MOVIES } from './movies_List';

@Injectable()
export class MovieService {

  constructor() { }

  getListMovies(): Movie[] {
    return MOVIES;
  }

  getMovieById(movieId: number): Movie|undefined {
    return MOVIES.find(movie => movie.id == movieId)
  }

}
