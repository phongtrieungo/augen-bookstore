import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Store, select } from '@ngrx/store';
import { EMPTY, of } from 'rxjs';

import { BookstoreService } from '../services/bookstore.service';
import * as BookstorePageActions from '../actions/bookstore.action';
import { catchError, map, mergeMap, switchMap, withLatestFrom } from 'rxjs/operators';
import { AppState, selectSearchTerm } from '../selectors';

@Injectable()
export class BookstoreEffect {
  constructor(private action$: Actions, private bookstoreService: BookstoreService, private store: Store<AppState>) { }

  loadBooks$ = createEffect(() => this.action$.pipe(
    ofType(BookstorePageActions.SET_SEARCH_TERM),
    withLatestFrom(this.store.select(selectSearchTerm)),
    mergeMap(([action, searchTerm]) => {
      if (searchTerm) {
        return this.bookstoreService.searchBook(searchTerm).pipe(
          switchMap(response => [
            BookstorePageActions.searchBookSuccess({ payload: response }),
            BookstorePageActions.setLoadingState({ payload: false })
          ]),
          catchError(error => of(BookstorePageActions.searchBookFail({ payload: error })))
        );
      }
      return EMPTY;
    }),
    catchError(error => {
      this.store.dispatch(BookstorePageActions.setLoadingState({ payload: false }));
      return of(BookstorePageActions.searchBookFail({ payload: error }))
    }),
  ));

  loadShippingCost$ = createEffect(() => this.action$.pipe(
    ofType(BookstorePageActions.GET_SHIPPING_COST),
    mergeMap(() => this.bookstoreService.getShippingCost().pipe(
      map(response => BookstorePageActions.getShippingCostSuccess({ payload: response })),
      catchError(error => of(BookstorePageActions.getShippingCostFail({ payload: error })))
    )),
    catchError(error => of(BookstorePageActions.getShippingCostFail({ payload: error })))
  ));

  buyBook$ = createEffect(() => this.action$.pipe(
    ofType(BookstorePageActions.BUY_BOOK),
    mergeMap(({ payload }) => this.bookstoreService.buyBook(payload).pipe(
      map(response => BookstorePageActions.buyBookSuccess({ payload: response })),
      catchError(error => of(BookstorePageActions.buyBookFail({ payload: error })))
    )),
    catchError(error => of(BookstorePageActions.buyBookFail({ payload: error })))
  ));
}
