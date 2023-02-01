import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Movie } from 'src/app/movieModel';
import { MovieService } from '../movie.service';

@Component({
  selector: 'app-edit-movie',
  template: ``,
  styles: [
  ]
})
export class EditMovieComponent implements OnInit {
  movie : Movie|undefined;

  constructor(
    private route: ActivatedRoute,
    private movieService: MovieService
  ) { }

  ngOnInit() {
      const movieId: string|null = this.route.snapshot.paramMap.get('id');

      if(movieId)  {
        this.movie = this.movieService.getMovieById(+movieId)
      } else {
        this.movie = undefined;
      }
      
  }
}
