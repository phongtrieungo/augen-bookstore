import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { ItemModel } from 'src/app/models/item.model';
import { setSelectedBook } from '../actions/bookstore.action';
import { AppState, selectSelectedBook } from '../selectors';

declare const bootstrap: any;

@Component({
  selector: 'augen-bookstore-list',
  templateUrl: './bookstore-list.component.html',
  styleUrls: ['./bookstore-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BookstoreListComponent implements OnInit {

  @Input() isLoading = false;
  @Input() books: ItemModel[] = [];
  @Input() error: string = '';

  selectedBook$ = this.store.pipe(select(selectSelectedBook))

  constructor(private store: Store<AppState>) { }

  ngOnInit() {
  }

  onOpenBookDetailModal(bookInfor: ItemModel): void {
    this.store.dispatch(setSelectedBook({ payload: bookInfor }));

    const modal = new bootstrap.Modal(document.getElementById('bookDetailModal'));
    modal.show();
  }

}
