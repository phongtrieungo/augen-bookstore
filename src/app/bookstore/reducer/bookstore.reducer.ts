import { ItemModel } from '../../models/item.model';
import { createReducer, on, Action } from '@ngrx/store';
import * as BookstorePageActions from '../actions/bookstore.action';

export const bookstoreFeatureKey = 'bookstore';

export interface State {
  searchTerm: string;
  books: ItemModel[];
  selectedBook: ItemModel;
  isLoading: boolean;
}

export const initialState: State = {
  searchTerm: '',
  books: [],
  selectedBook: {
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
  },
  isLoading: false
};

const bookstoreReducer = createReducer(
  initialState,
  on(BookstorePageActions.setSearchTerm, (state, { payload }) => ({ ...state, searchTerm: payload })),
  on(BookstorePageActions.searchBookSuccess, (state, { payload }) => ({ ...state, books: payload })),
  on(BookstorePageActions.setLoadingState, (state, { payload }) => ({ ...state, isLoading: payload })),
  on(BookstorePageActions.setSelectedBook, (state, { payload }) => ({ ...state, selectedBook: payload }))
);

export function reducer(state: State | undefined, action: Action): State {
  return bookstoreReducer(state, action);
}
