import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Movie } from '../../movieModel';
import { MovieService } from '../movie.service';

@Component({
  selector: 'app-list-movies',
  templateUrl: './list-movies.component.html',
  styleUrls: ['./movie.component.css'],
})
export class ListMoviesComponent implements OnInit{
  moviesList: Movie[] | undefined;

  constructor(
    private router: Router,
    private movieService: MovieService
  ){}

  ngOnInit() {
      this.moviesList = this.movieService.getListMovies();
  }

  showMovie(movie: Movie) {
    this.router.navigate(['/movie', movie.id]);
  }
}
