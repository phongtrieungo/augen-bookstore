import { Component, OnInit } from '@angular/core';
import { catchError, finalize, map } from 'rxjs/operators';
import { Store, select } from '@ngrx/store';

import { ItemModel } from '../models/item.model';
import { BookstoreService } from './services/bookstore.service';
import { AppState, BookstoreState, selectBooks, selectLoadingState, selectSearchTerm } from './selectors';
import { searchBookSuccess, setLoadingState, setSearchTerm } from './actions/bookstore.action';
import { Observable } from 'rxjs';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';

declare const bootstrap: any;

@Component({
  selector: 'augen-bookstore',
  templateUrl: './bookstore.component.html',
  styleUrls: ['./bookstore.component.scss']
})
export class BookstoreComponent implements OnInit {

  books: ItemModel[] = [];
  hintText = 'Search by book title or author';
  currentSelectedBook: ItemModel = {
    authors: [],
    description: '',
    id: '',
    imageLinks: {
      smallThumbnail: '',
      thumbnail: ''
    },
    publishedDate: '',
    shippingMethod: '',
    title: ''
  };

  isLoading = false;
  error = '';

  books$ = this.store.pipe(select(selectBooks));
  isLoading$ = this.store.pipe(select(selectLoadingState));

  constructor(private store: Store<AppState>) { }

  ngOnInit(): void {
  }

  searchBook(searchTerm: string): void {
    this.store.dispatch(setSearchTerm({payload: searchTerm}));

    if (!searchTerm) {
      this.store.dispatch(searchBookSuccess({payload: []}));
      return;
    }
    this.store.dispatch(setLoadingState({payload: true}));
    // this.isLoading = true;
    // this.bookstoreService.searchBook(searchTerm).pipe(
    //   map(response => {
    //     this.books = [...response];
    //     this.error = '';
    //   }),
    //   finalize(() => this.isLoading = false),
    //   catchError(error => this.error = 'Cannot fetch data from server')
    // ).subscribe();
  }

  onOpenBookDetailModal(bookInfor: ItemModel): void {
    this.currentSelectedBook = {...bookInfor};
    const modal = new bootstrap.Modal(document.getElementById('bookDetailModal'));

    modal.show();
  }
}
