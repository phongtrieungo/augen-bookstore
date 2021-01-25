import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { ItemModel } from 'src/app/models/item.model';
import { buyBook, setSelectedBook } from '../actions/bookstore.action';
import { AppState, selectDeliveryInfo, selectSelectedBook, selectShippingCost } from '../selectors';

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
  @Input() error = '';

  selectedBook$ = this.store.pipe(select(selectSelectedBook));
  shippingCost$ = this.store.pipe(select(selectShippingCost));
  deliveryInfo$ = this.store.pipe(select(selectDeliveryInfo));

  bookDetailModal: any;

  constructor(private store: Store<AppState>) { }

  ngOnInit(): void {
  }

  onOpenBookDetailModal(bookInfor: ItemModel): void {
    this.store.dispatch(setSelectedBook({ payload: bookInfor }));

    this.bookDetailModal = new bootstrap.Modal(document.getElementById('bookDetailModal'));
    this.bookDetailModal.show();
  }

  buyBook(request: any): void {
    this.store.dispatch(buyBook({payload: request}));
    this.bookDetailModal.hide();
  }

}
