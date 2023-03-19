import { AfterViewInit, ChangeDetectionStrategy, Component, Inject, TemplateRef, ViewChild } from '@angular/core';
import { FormControl } from "@angular/forms";
import {
  TuiAlertOptions,
  TuiAlertService,
  TuiDialogContext,
  TuiDialogOptions,
  TuiDialogService,
  TuiNotification
} from "@taiga-ui/core";
import { TuiAlertContext } from "@taiga-ui/cdk";
import { PolymorpheusContent } from "@tinkoff/ng-polymorpheus";

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MoviesComponent implements AfterViewInit {
  @ViewChild('movieAlertSuccessTemplate')
  movieAlertSuccessTemplate?: TemplateRef<TuiAlertContext<TuiAlertOptions<unknown>>>;

  @ViewChild('movieAlertErrorTemplate')
  movieAlertErrorTemplate?: TemplateRef<TuiAlertContext<TuiAlertOptions<unknown>>>;

  @ViewChild('movieDialogTemplate')
  movieDialogTemplate?: PolymorpheusContent<TuiDialogContext<TuiDialogOptions<unknown>>>;

  searchControl = new FormControl<string>('');
  movieDisplayArray: any[] = [];
  selectedQuery: string = '';

  constructor(
    @Inject(TuiDialogService)
    private readonly dialogService: TuiDialogService,
    @Inject(TuiAlertService)
    private readonly alertService: TuiAlertService
  ) {
  }

  optionArray = [
    { number: 1, optionName: 'Film Nou' },
    { number: 2, optionName: 'Film Vechi' },
    { number: 3, optionName: 'Rating Mare' },
    { number: 4, optionName: 'Rating Mic' },
    { number: 5, optionName: 'Numar mare de Oscar' },
    { number: 6, optionName: 'Numar mic de Oscar' },
    { number: 7, optionName: 'Genre Drama' },
    { number: 8, optionName: 'Genre Action' },
    { number: 9, optionName: 'Genre Crime' },
    { number: 10, optionName: 'Genre Biography' },
    { number: 11, optionName: 'Genre Comedy' },
    { number: 12, optionName: 'Genre Thriller' },
  ];

  moviesYearArray = [
    { movieName: "The Godfather I", year: 1972, url: 'https://www.imdb.com/title/tt0068646/?ref_=adv_li_tt' },
    { movieName: "Schindler's List", year: 1993, url: 'https://www.imdb.com/title/tt0108052/?ref_=adv_li_tt' },
    {
      movieName: "The Lord of the Rings: The Return of the King",
      year: 2003,
      url: 'https://www.imdb.com/title/tt0167260/?ref_=adv_li_tt'
    },
    { movieName: "The Godfather II", year: 1974, url: 'https://www.imdb.com/title/tt0071562/?ref_=adv_li_tt' },
    { movieName: "Forrest Gump", year: 1994, url: 'https://www.imdb.com/title/tt0109830/?ref_=adv_li_tt' },
    {
      movieName: "One Flew Over the Cuckoo's Nest",
      year: 1975,
      url: 'https://www.imdb.com/title/tt0073486/?ref_=adv_li_tt'
    },
    { movieName: "The Silence of the Lambs", year: 1991, url: 'https://www.imdb.com/title/tt0102926/?ref_=adv_li_tt' },
    { movieName: "Parasite", year: 2019, url: 'https://www.imdb.com/title/tt6751668/?ref_=adv_li_tt' },
    { movieName: "Gladiator", year: 2000, url: 'https://www.imdb.com/title/tt0172495/?ref_=adv_li_tt' },
    { movieName: "The Departed", year: 2006, url: 'https://www.imdb.com/title/tt0407887/?ref_=adv_li_tt' },
    { movieName: "Braveheart", year: 1995, url: 'https://www.imdb.com/title/tt0112573/?ref_=adv_li_tt' },
    { movieName: "Green Book", year: 2018, url: 'https://www.imdb.com/title/tt6966692/?ref_=adv_li_tt' },
    { movieName: "A Beautiful Mind", year: 2001, url: 'https://www.imdb.com/title/tt0268978/?ref_=adv_li_tt' },
    { movieName: "12 Years a Slave", year: 2013, url: 'https://www.imdb.com/title/tt2024544/?ref_=adv_li_tt' },
    { movieName: "The Deer Hunter", year: 1978, url: 'https://www.imdb.com/title/tt0077416/?ref_=adv_li_tt' },
    { movieName: "Million Dollar Baby", year: 2004, url: 'https://www.imdb.com/title/tt0405159/?ref_=adv_li_tt' },
    { movieName: "Slumdog Millionaire", year: 2008, url: 'https://www.imdb.com/title/tt1010048/?ref_=adv_li_tt' },
    { movieName: "Rain Man", year: 1988, url: 'https://www.imdb.com/title/tt0095953/?ref_=adv_li_tt' },
    { movieName: "Titanic", year: 1997, url: 'https://www.imdb.com/title/tt0120338/?ref_=adv_li_tt' }
  ];

  moviesDirectorArray = [
    {
      movieName: "The Godfather I",
      director: "Francis Ford Coppola",
      url: 'https://www.imdb.com/title/tt0068646/?ref_=adv_li_tt'
    },
    {
      movieName: "Schindler's List",
      director: "Steven Spielberg",
      url: 'https://www.imdb.com/title/tt0108052/?ref_=adv_li_tt'
    },
    { movieName: "The Lord of the Rings: The Return of the King", director: "Peter Jackson" },
    {
      movieName: "The Godfather II",
      director: "Francis Ford Coppola",
      url: 'https://www.imdb.com/title/tt0071562/?ref_=adv_li_tt'
    },
    {
      movieName: "Forrest Gump",
      director: "Robert Zemeckis",
      url: 'https://www.imdb.com/title/tt0109830/?ref_=adv_li_tt'
    },
    {
      movieName: "One Flew Over the Cuckoo's Nest",
      director: "Milos Forman",
      url: 'https://www.imdb.com/title/tt0073486/?ref_=adv_li_tt'
    },
    {
      movieName: "The Silence of the Lambs",
      director: "Jonathan Demme",
      url: 'https://www.imdb.com/title/tt0102926/?ref_=adv_li_tt'
    },
    { movieName: "Parasite", director: "Bong Joon Ho", url: 'https://www.imdb.com/title/tt6751668/?ref_=adv_li_tt' },
    { movieName: "Gladiator", director: "Ridley Scott", url: 'https://www.imdb.com/title/tt0172495/?ref_=adv_li_tt' },
    {
      movieName: "The Departed",
      director: "Martin Scorsese",
      url: 'https://www.imdb.com/title/tt0407887/?ref_=adv_li_tt'
    },
    { movieName: "Braveheart", director: "Mel Gibson", url: 'https://www.imdb.com/title/tt0112573/?ref_=adv_li_tt' },
    {
      movieName: "Green Book",
      director: "Peter Farrelly",
      url: 'https://www.imdb.com/title/tt6966692/?ref_=adv_li_tt'
    },
    {
      movieName: "A Beautiful Mind",
      director: "Ron Howard",
      url: 'https://www.imdb.com/title/tt0268978/?ref_=adv_li_tt'
    },
    {
      movieName: "12 Years a Slave",
      director: "Steve McQueen",
      url: 'https://www.imdb.com/title/tt2024544/?ref_=adv_li_tt'
    },
    {
      movieName: "The Deer Hunter",
      director: "Michael Cimino",
      url: 'https://www.imdb.com/title/tt0077416/?ref_=adv_li_tt'
    },
    {
      movieName: "Million Dollar Baby",
      director: "Clint Eastwood",
      url: 'https://www.imdb.com/title/tt0405159/?ref_=adv_li_tt'
    },
    {
      movieName: "Slumdog Millionaire",
      director: "Danny Boyle",
      url: 'https://www.imdb.com/title/tt1010048/?ref_=adv_li_tt'
    },
    { movieName: "Rain Man", director: "Barry Levinson", url: 'https://www.imdb.com/title/tt0095953/?ref_=adv_li_tt' },
    { movieName: "Titanic", director: "James Cameron", url: 'https://www.imdb.com/title/tt0120338/?ref_=adv_li_tt' }
  ];

  moviesRatingArray = [
    { movieName: "The Godfather I", rating: 9.2, url: 'https://www.imdb.com/title/tt0068646/?ref_=adv_li_tt' },
    { movieName: "Schindler's List", rating: 9.0, url: 'https://www.imdb.com/title/tt0108052/?ref_=adv_li_tt' },
    {
      movieName: "The Lord of the Rings: The Return of the King",
      rating: 9.0,
      url: 'https://www.imdb.com/title/tt0167260/?ref_=adv_li_tt'
    },
    { movieName: "The Godfather II", rating: 9.0, url: 'https://www.imdb.com/title/tt0071562/?ref_=adv_li_tt' },
    { movieName: "Forrest Gump", rating: 8.8, url: 'https://www.imdb.com/title/tt0109830/?ref_=adv_li_tt' },
    {
      movieName: "One Flew Over the Cuckoo's Nest",
      rating: 8.7,
      url: 'https://www.imdb.com/title/tt0073486/?ref_=adv_li_tt'
    },
    { movieName: "The Silence of the Lambs", rating: 8.6, url: 'https://www.imdb.com/title/tt0102926/?ref_=adv_li_tt' },
    { movieName: "Parasite", rating: 8.5, url: 'https://www.imdb.com/title/tt6751668/?ref_=adv_li_tt' },
    { movieName: "Gladiator", rating: 8.5, url: 'https://www.imdb.com/title/tt0172495/?ref_=adv_li_tt' },
    { movieName: "The Departed", rating: 8.5, url: 'https://www.imdb.com/title/tt0407887/?ref_=adv_li_tt' },
    { movieName: "Braveheart", rating: 8.4, url: 'https://www.imdb.com/title/tt0112573/?ref_=adv_li_tt' },
    { movieName: "Green Book", rating: 8.2, url: 'https://www.imdb.com/title/tt6966692/?ref_=adv_li_tt' },
    { movieName: "A Beautiful Mind", rating: 8.2, url: 'https://www.imdb.com/title/tt0268978/?ref_=adv_li_tt' },
    { movieName: "12 Years a Slave", rating: 8.1, url: 'https://www.imdb.com/title/tt2024544/?ref_=adv_li_tt' },
    { movieName: "The Deer Hunter", rating: 8.1, url: 'https://www.imdb.com/title/tt0077416/?ref_=adv_li_tt' },
    { movieName: "Million Dollar Baby", rating: 8.1, url: 'https://www.imdb.com/title/tt0405159/?ref_=adv_li_tt' },
    { movieName: "Slumdog Millionaire", rating: 8.0, url: 'https://www.imdb.com/title/tt1010048/?ref_=adv_li_tt' },
    { movieName: "Rain Man", rating: 8.0, url: 'https://www.imdb.com/title/tt0095953/?ref_=adv_li_tt' },
    { movieName: "Titanic", rating: 7.9, url: 'https://www.imdb.com/title/tt0120338/?ref_=adv_li_tt' }
  ];

  moviesOscarsArray = [
    { movieName: "The Godfather I", oscar: 3, url: 'https://www.imdb.com/title/tt0068646/?ref_=adv_li_tt' },
    { movieName: "Schindler's List", oscar: 7, url: 'https://www.imdb.com/title/tt0108052/?ref_=adv_li_tt' },
    {
      movieName: "The Lord of the Rings: The Return of the King",
      oscar: 11,
      url: 'https://www.imdb.com/title/tt0167260/?ref_=adv_li_tt'
    },
    { movieName: "The Godfather II", oscar: 6, url: 'https://www.imdb.com/title/tt0071562/?ref_=adv_li_tt' },
    { movieName: "Forrest Gump", oscar: 6, url: 'https://www.imdb.com/title/tt0109830/?ref_=adv_li_tt' },
    {
      movieName: "One Flew Over the Cuckoo's Nest",
      oscar: 5,
      url: 'https://www.imdb.com/title/tt0073486/?ref_=adv_li_tt'
    },
    { movieName: "The Silence of the Lambs", oscar: 5, url: 'https://www.imdb.com/title/tt0102926/?ref_=adv_li_tt' },
    { movieName: "Parasite", oscar: 4, url: 'https://www.imdb.com/title/tt6751668/?ref_=adv_li_tt' },
    { movieName: "Gladiator", oscar: 5, url: 'https://www.imdb.com/title/tt0172495/?ref_=adv_li_tt' },
    { movieName: "The Departed", oscar: 4, url: 'https://www.imdb.com/title/tt0407887/?ref_=adv_li_tt' },
    { movieName: "Braveheart", oscar: 5, url: 'https://www.imdb.com/title/tt0112573/?ref_=adv_li_tt' },
    { movieName: "Green Book", oscar: 3, url: 'https://www.imdb.com/title/tt6966692/?ref_=adv_li_tt' },
    { movieName: "A Beautiful Mind", oscar: 4, url: 'https://www.imdb.com/title/tt0268978/?ref_=adv_li_tt' },
    { movieName: "12 Years a Slave", oscar: 3, url: 'https://www.imdb.com/title/tt2024544/?ref_=adv_li_tt' },
    { movieName: "The Deer Hunter", oscar: 5, url: 'https://www.imdb.com/title/tt0077416/?ref_=adv_li_tt' },
    { movieName: "Million Dollar Baby", oscar: 4, url: 'https://www.imdb.com/title/tt0405159/?ref_=adv_li_tt' },
    { movieName: "Slumdog Millionaire", oscar: 8, url: 'https://www.imdb.com/title/tt1010048/?ref_=adv_li_tt' },
    { movieName: "Rain Man", oscar: 4, url: 'https://www.imdb.com/title/tt0095953/?ref_=adv_li_tt' },
    { movieName: "Titanic", oscar: 11, url: 'https://www.imdb.com/title/tt0120338/?ref_=adv_li_tt' }
  ];

  moviesGenreArray = [
    { movieName: "The Godfather I", genre: "Crime", url: 'https://www.imdb.com/title/tt0068646/?ref_=adv_li_tt' },
    { movieName: "Schindler's List", genre: "Biography", url: 'https://www.imdb.com/title/tt0108052/?ref_=adv_li_tt' },
    {
      movieName: "The Lord of the Rings: The Return of the King",
      genre: "Action",
      url: 'https://www.imdb.com/title/tt0167260/?ref_=adv_li_tt'
    },
    { movieName: "The Godfather II", genre: "Crime", url: 'https://www.imdb.com/title/tt0071562/?ref_=adv_li_tt' },
    { movieName: "Forrest Gump", genre: "Drama", url: 'https://www.imdb.com/title/tt0109830/?ref_=adv_li_tt' },
    {
      movieName: "One Flew Over the Cuckoo's Nest",
      genre: "Drama",
      url: 'https://www.imdb.com/title/tt0073486/?ref_=adv_li_tt'
    },
    {
      movieName: "The Silence of the Lambs",
      genre: "Crime",
      url: 'https://www.imdb.com/title/tt0102926/?ref_=adv_li_tt'
    },
    { movieName: "Parasite", genre: "Thriller", url: 'https://www.imdb.com/title/tt6751668/?ref_=adv_li_tt' },
    { movieName: "Gladiator", genre: "Action", url: 'https://www.imdb.com/title/tt0172495/?ref_=adv_li_tt' },
    { movieName: "The Departed", genre: "Crime", url: 'https://www.imdb.com/title/tt0407887/?ref_=adv_li_tt' },
    { movieName: "Braveheart", genre: "Biography", url: 'https://www.imdb.com/title/tt0112573/?ref_=adv_li_tt' },
    { movieName: "Green Book", genre: "Comedy", url: 'https://www.imdb.com/title/tt6966692/?ref_=adv_li_tt' },
    { movieName: "A Beautiful Mind", genre: "Drama", url: 'https://www.imdb.com/title/tt0268978/?ref_=adv_li_tt' },
    { movieName: "12 Years a Slave", genre: "Drama", url: 'https://www.imdb.com/title/tt2024544/?ref_=adv_li_tt' },
    { movieName: "The Deer Hunter", genre: "Drama", url: 'https://www.imdb.com/title/tt0077416/?ref_=adv_li_tt' },
    { movieName: "Million Dollar Baby", genre: "Drama", url: 'https://www.imdb.com/title/tt0405159/?ref_=adv_li_tt' },
    { movieName: "Slumdog Millionaire", genre: "Crime", url: 'https://www.imdb.com/title/tt1010048/?ref_=adv_li_tt' },
    { movieName: "Rain Man", genre: "Drama", url: 'https://www.imdb.com/title/tt0095953/?ref_=adv_li_tt' },
    { movieName: "Titanic", genre: "Drama", url: 'https://www.imdb.com/title/tt0120338/?ref_=adv_li_tt' }
  ];

  ngAfterViewInit() {
    this.dialogService
      .open(this.movieDialogTemplate, { label: 'Bine ai venit!', size: 'm', closeable: true, dismissible: true })
      .subscribe();
  }

  onInputSearch(filter: string) {
    switch (filter.toLowerCase()) {
      case '1':
      case 'film nou':
        this.selectedQuery = 'Ai selectat filme noi, anii > 2000'
        this.movieDisplayArray = this.moviesYearArray.filter(x => x.year >= 2000);
        this.showSuccessAlert();
        break;
      case '2':
      case 'film vechi':
        this.selectedQuery = 'Ai selectat filme vechi, anii < 2000'
        this.movieDisplayArray = this.moviesYearArray.filter(x => x.year < 2000);
        this.showSuccessAlert();
        break;
      case '3':
      case 'rating mare':
        this.selectedQuery = 'Ai selectat filme cu rating mare, rating > 8.5'
        this.movieDisplayArray = this.moviesRatingArray.filter(x => x.rating >= 8.5);
        this.showSuccessAlert();
        break;
      case '4':
      case 'rating mic':
        this.selectedQuery = 'Ai selectat filme cu rating mic, rating < 8.5'
        this.movieDisplayArray = this.moviesRatingArray.filter(x => x.rating < 8.5);
        this.showSuccessAlert();
        break;
      case '5':
      case 'numar mare de oscar':
        this.selectedQuery = 'Ai selectat filme cu număr mare de Oscars, Oscars > 5'
        this.movieDisplayArray = this.moviesOscarsArray.filter(x => x.oscar >= 5);
        this.showSuccessAlert();
        break;
      case '6':
      case 'numar mic de oscar':
        this.selectedQuery = 'Ai selectat filme cu număr mic de Oscars, Oscars < 5'
        this.movieDisplayArray = this.moviesOscarsArray.filter(x => x.oscar < 5);
        this.showSuccessAlert();
        break;
      case '7':
      case 'genre drama':
        this.selectedQuery = 'Ai selectat filme genre Drama'
        this.movieDisplayArray = this.moviesGenreArray.filter(x => x.genre === 'Drama');
        this.showSuccessAlert();
        break;
      case '8':
      case 'genre action':
        this.selectedQuery = 'Ai selectat filme genre Action'
        this.movieDisplayArray = this.moviesGenreArray.filter(x => x.genre === 'Action');
        this.showSuccessAlert();
        break;
      case '9':
      case 'genre crime':
        this.selectedQuery = 'Ai selectat filme genre Crime'
        this.movieDisplayArray = this.moviesGenreArray.filter(x => x.genre === 'Crime');
        this.showSuccessAlert();
        break;
      case '10':
      case 'genre biography':
        this.selectedQuery = 'Ai selectat filme genre Biography'
        this.movieDisplayArray = this.moviesGenreArray.filter(x => x.genre === 'Biography');
        this.showSuccessAlert();
        break;
      case '11':
      case 'genre comedy':
        this.selectedQuery = 'Ai selectat filme genre Comedy'
        this.movieDisplayArray = this.moviesGenreArray.filter(x => x.genre === 'Comedy');
        this.showSuccessAlert();
        break;
      case '12':
      case 'genre thriller':
        this.selectedQuery = 'Ai selectat filme genre Thriller'
        this.movieDisplayArray = this.moviesGenreArray.filter(x => x.genre === 'Thriller');
        this.showSuccessAlert();
        break;
      default:
        this.selectedQuery = '';
        this.movieDisplayArray = [];
        this.searchControl.reset('');
        this.showErrorAlert();
        break;
    }
  }

  showSuccessAlert() {
    this.alertService
      .open(this.movieAlertSuccessTemplate || '', {
        label: 'Succes',
        status: TuiNotification.Success,
      })
      .subscribe();
  }

  showErrorAlert() {
    this.alertService
      .open(this.movieAlertErrorTemplate || '', {
        label: 'Eroare',
        status: TuiNotification.Error,
      })
      .subscribe();
  }
}
