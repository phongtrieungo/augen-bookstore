import { Component, OnInit, ChangeDetectionStrategy, Input, Output, EventEmitter } from '@angular/core';
import { ItemModel } from 'src/app/models/item.model';

@Component({
  selector: 'augen-card-list-item',
  templateUrl: './card-list-item.component.html',
  styleUrls: ['./card-list-item.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CardListItemComponent implements OnInit {

  @Input() item: ItemModel = {
    authors: ['test author'],
    description: 'test desc',
    id: '123',
    imageLinks: {
      smallThumbnail: 'nothing',
      thumbnail: 'nothing'
    },
    publishedDate: '2021',
    shippingMethod: 'none',
    title: 'test title'
  };

  @Output() openCardDetailEmitter = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  openCardDetail(): void {
    this.openCardDetailEmitter.emit(this.item);
  }

}
