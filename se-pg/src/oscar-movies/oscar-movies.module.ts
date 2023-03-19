import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MoviesComponent } from "./movies/movies.component";
import { TuiInputModule } from "@taiga-ui/kit";
import { TuiButtonModule, TuiLinkModule, TuiTextfieldControllerModule } from "@taiga-ui/core";
import { ReactiveFormsModule } from "@angular/forms";

@NgModule({
  declarations: [MoviesComponent],
  exports: [MoviesComponent],
  imports: [
    CommonModule,
    TuiInputModule,
    TuiTextfieldControllerModule,
    ReactiveFormsModule,
    TuiButtonModule,
    TuiLinkModule,
  ]
})
export class OscarMoviesModule {
}
