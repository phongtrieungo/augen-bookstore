import { ItemModel } from '../../models/item.model';
import { createReducer, on, Action } from '@ngrx/store';
import * as BookstorePageActions from '../actions/bookstore.action';
import { ShippingCost } from 'src/app/models/shipping-cost.model';

export const bookstoreFeatureKey = 'bookstore';

export interface State {
  searchTerm: string;
  books: ItemModel[];
  selectedBook: ItemModel;
  isLoading: boolean;
  shippingCost: ShippingCost;
  boughtBook: any;
  deliveryInfo: any;
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
  isLoading: false,
  shippingCost: {
    aircraft: 0,
    motobike: 0,
    train: 0
  },
  boughtBook: {},
  deliveryInfo: null
};

const bookstoreReducer = createReducer(
  initialState,
  on(BookstorePageActions.setSearchTerm, (state, { payload }) => ({ ...state, searchTerm: payload })),
  on(BookstorePageActions.searchBookSuccess, (state, { payload }) => ({ ...state, books: payload })),
  on(BookstorePageActions.searchBookFail, (state, { payload }) => ({ ...state, books: [] })),
  on(BookstorePageActions.setLoadingState, (state, { payload }) => ({ ...state, isLoading: payload })),
  on(BookstorePageActions.setSelectedBook, (state, { payload }) => ({ ...state, selectedBook: payload })),
  on(BookstorePageActions.getShippingCostSuccess, (state, { payload }) => ({ ...state, shippingCost: payload })),
  on(BookstorePageActions.buyBook, (state, { payload }) => ({ ...state, boughtBook: payload })),
  on(BookstorePageActions.buyBookSuccess, (state, { payload }) => ({ ...state, deliveryInfo: payload }))
);

export function reducer(state: State | undefined, action: Action): State {
  return bookstoreReducer(state, action);
}
