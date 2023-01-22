import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListMoviesComponent } from './list-movies/list-movies.component';
import { RouterModule, Routes } from '@angular/router';
import { MovieService } from './movie.service';


const movieRoutes: Routes = [
  { path: 'movies', component:ListMoviesComponent }
];

@NgModule({
  declarations: [
    ListMoviesComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(movieRoutes),
  ],
  providers: [MovieService]
})
export class MovieModule { }
