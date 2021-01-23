import { createAction, props } from '@ngrx/store';
import { ItemModel } from '../../models/item.model';

export const SET_SEARCH_TERM = '[Bookstore Page] Set search term';
export const SEARCH_BOOK = '[Bookstore Page] Search book';
export const SEARCH_BOOK_SUCCESS = '[Bookstore Page] Search book success';
export const SEARCH_BOOK_FAIL = '[Bookstore Page] Search book fail';
export const SET_SELECTED_BOOK = '[Bookstore page] Set selected book';
export const SET_LOADING_STATE = '[Bookstore page] Set loading state';

export const setSearchTerm = createAction(
  SET_SEARCH_TERM,
  props<{ payload: string}>()
);

export const searchBook = createAction(
  SEARCH_BOOK,
  props<{ payload: string}>()
);

export const searchBookSuccess = createAction(
  SEARCH_BOOK_SUCCESS,
  props<{ payload: ItemModel[]}>()
);

export const searchBookFail = createAction(
  SEARCH_BOOK_FAIL,
  props<{ payload: string}>()
);

export const setSelectedBook = createAction(
  SET_SELECTED_BOOK,
  props<{ payload: ItemModel}>()
);

export const setLoadingState = createAction(
  SET_LOADING_STATE,
  props<{ payload: boolean}>()
);
