import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MoviesComponent } from "../oscar-movies/movies/movies.component";

const routes: Routes = [
  { path: '', redirectTo: 'oscar-movies', pathMatch: 'full' },
  { path: 'oscar-movies', component: MoviesComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
