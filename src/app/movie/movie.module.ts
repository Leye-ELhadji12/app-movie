import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListMoviesComponent } from './list-movies/list-movies.component';
import { RouterModule, Routes } from '@angular/router';
import { MovieService } from './movie.service';
import { DetailsMoviesComponent } from './details-movies/details-movies.component';


const movieRoutes: Routes = [
  { path: 'movies', component:ListMoviesComponent },
  { path: 'movie/:id', component: DetailsMoviesComponent }
];

@NgModule({
  declarations: [
    ListMoviesComponent,
    DetailsMoviesComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(movieRoutes),
  ],
  providers: [MovieService]
})
export class MovieModule { }
