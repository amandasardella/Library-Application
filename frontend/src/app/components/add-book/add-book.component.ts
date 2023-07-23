import { Component } from '@angular/core';

import { Books } from 'src/app/models/books.model';
import { Genres } from 'src/app/models/genres.model';
import { BooksService } from 'src/app/services/frontend.service';
import { GenresService } from 'src/app/services/genres.service';

@Component({
  selector: 'app-add-book',
  templateUrl: './add-book.component.html',
  styleUrls: ['./add-book.component.css']
})
export class AddBookComponent {
  books: Books = {
    title: '',
    author: '',
    year: 0,
    genres: '',
    ISBN: 0,
    availability: undefined,
    publisher: ''
  };

  submitted = false;

  genres: Genres[] = []
  constructor(private booksService: BooksService, private genresService: GenresService) { }
  ngOnInit(): void {
    this.genresService.getAll().subscribe(genres => {
      this.genres = genres;
    });
  }

  saveBook(): void {
    const data = {
      title: this.books.title,
      author: this.books.author,
      year: this.books.year,
      genres: this.books.genres,
      ISBN: this.books.ISBN,
      availability: this.books.availability,
      publisher: this.books.publisher
    };
    this.booksService.create(data)
      .subscribe({
        next: (res) => {
          console.log(res);
          this.submitted = true;
        },
        error: (e) => console.error(e)
      });
  }
  newBook(): void {
    this.submitted = false;
    this.books = {
      title: '',
      author: '',
      year: 0,
      genres: '',
      ISBN: 0,
      availability: undefined,
      publisher: ''
    };
  }
}