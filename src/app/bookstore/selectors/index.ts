import { createSelector } from '@ngrx/store';
import { ItemModel } from '../../models/item.model';

export interface BookstoreState {
  searchTerm: string;
  books: ItemModel[];
  selectedBook: ItemModel;
  isLoading: boolean;
}

export interface AppState {
  bookstore: BookstoreState;
}

export const selectBookstore = (state: AppState) => state.bookstore;

export const selectSearchTerm = createSelector(
  selectBookstore,
  (state: BookstoreState) => state.searchTerm
);

export const selectBooks = createSelector(
  selectBookstore,
  (state: BookstoreState) => state.books
);

export const selectLoadingState = createSelector(
  selectBookstore,
  (state: BookstoreState) => state.isLoading
);

export const selectSelectedBook = createSelector(
  selectBookstore,
  (state: BookstoreState) => state.selectedBook
)
