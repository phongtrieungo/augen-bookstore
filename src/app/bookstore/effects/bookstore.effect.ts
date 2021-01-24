import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Store, select } from '@ngrx/store';
import { EMPTY, of } from 'rxjs';

import { BookstoreService } from '../services/bookstore.service';
import * as BookstorePageActions from '../actions/bookstore.action';
import { catchError, mergeMap, switchMap, withLatestFrom } from 'rxjs/operators';
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
    })
  ));
}
