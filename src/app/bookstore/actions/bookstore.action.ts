import { createAction, props } from '@ngrx/store';
import { ItemModel } from '../../models/item.model';
import { ShippingCost } from '../../models/shipping-cost.model';

export const SET_SEARCH_TERM = '[Bookstore Page] Set search term';

export const SEARCH_BOOK = '[Bookstore Page] Search book';
export const SEARCH_BOOK_SUCCESS = '[Bookstore Page] Search book success';
export const SEARCH_BOOK_FAIL = '[Bookstore Page] Search book fail';

export const SET_SELECTED_BOOK = '[Bookstore page] Set selected book';
export const SET_LOADING_STATE = '[Bookstore page] Set loading state';

export const GET_SHIPPING_COST = '[Bookstore page] Get shipping cost';
export const GET_SHIPPING_COST_SUCCESS = '[Bookstore page] Get shipping cost success';
export const GET_SHIPPING_COST_FAIL = '[Bookstore page] Get shipping cost fail';

export const BUY_BOOK = '[Bookstore page] Buy book';
export const BUY_BOOK_SUCCESS = '[Bookstore page] Buy book success';
export const BUY_BOOK_FAIL = '[Bookstore page] Buy book fail';

export const setSearchTerm = createAction(
  SET_SEARCH_TERM,
  props<{ payload: string }>()
);

export const searchBook = createAction(
  SEARCH_BOOK,
  props<{ payload: string }>()
);

export const searchBookSuccess = createAction(
  SEARCH_BOOK_SUCCESS,
  props<{ payload: ItemModel[] }>()
);

export const searchBookFail = createAction(
  SEARCH_BOOK_FAIL,
  props<{ payload: [] }>()
);

export const setSelectedBook = createAction(
  SET_SELECTED_BOOK,
  props<{ payload: ItemModel }>()
);

export const setLoadingState = createAction(
  SET_LOADING_STATE,
  props<{ payload: boolean }>()
);

export const getShippingCost = createAction(
  GET_SHIPPING_COST
);

export const getShippingCostSuccess = createAction(
  GET_SHIPPING_COST_SUCCESS,
  props<{ payload: ShippingCost }>()
);

export const getShippingCostFail = createAction(
  GET_SHIPPING_COST_FAIL,
  props<{ payload: any }>()
);

export const buyBook = createAction(
  BUY_BOOK,
  props<{ payload: any }>()
);

export const buyBookSuccess = createAction(
  BUY_BOOK_SUCCESS,
  props<{ payload: any }>()
);

export const buyBookFail = createAction(
  BUY_BOOK_FAIL,
  props<{ payload: any }>()
);
