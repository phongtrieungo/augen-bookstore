import { createSelector } from '@ngrx/store';
import { ShippingCost } from 'src/app/models/shipping-cost.model';
import { ItemModel } from '../../models/item.model';

export interface BookstoreState {
  searchTerm: string;
  books: ItemModel[];
  selectedBook: ItemModel;
  isLoading: boolean;
  shippingCost: ShippingCost;
  boughtBook: any;
  deliveryInfo: any;
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
);

export const selectShippingCost = createSelector(
  selectBookstore,
  (state: BookstoreState) => state.shippingCost
);

export const selectBoughtBook = createSelector(
  selectBookstore,
  (state: BookstoreState) => state.boughtBook
);

export const selectDeliveryInfo = createSelector(
  selectBookstore,
  (state: BookstoreState) => state.deliveryInfo
);
