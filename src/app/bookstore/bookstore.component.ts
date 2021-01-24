import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';

import { AppState, selectBooks, selectLoadingState } from './selectors';
import { searchBookSuccess, setLoadingState, setSearchTerm } from './actions/bookstore.action';

@Component({
  selector: 'augen-bookstore',
  templateUrl: './bookstore.component.html',
  styleUrls: ['./bookstore.component.scss']
})
export class BookstoreComponent implements OnInit {

  hintText = 'Search by book title or author';
  error = '';

  books$ = this.store.pipe(select(selectBooks));
  isLoading$ = this.store.pipe(select(selectLoadingState));

  constructor(private store: Store<AppState>) { }

  ngOnInit(): void {
  }

  searchBook(searchTerm: string): void {
    this.store.dispatch(setSearchTerm({ payload: searchTerm }));

    if (!searchTerm) {
      this.store.dispatch(searchBookSuccess({ payload: [] }));
      return;
    }
    this.store.dispatch(setLoadingState({ payload: true }));
  }
}
