import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Movie } from 'src/app/movieModel';
import { MovieService } from '../movie.service';

@Component({
  selector: 'app-details-movies',
  templateUrl: './details-movies.component.html',
  styleUrls: ['../movie.component.css'],
})
export class DetailsMoviesComponent implements OnInit{
  movie: Movie | undefined;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private movieService: MovieService
  ){}

  ngOnInit(){
    const movieId: string | null = this.route.snapshot.paramMap.get('id');
    if (movieId) {
      this.movie = this.movieService.getMovieById(+movieId);
      console.log('movie id : '+movieId);
    }
  }
}
