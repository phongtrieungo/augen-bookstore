import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';
import { ItemModel } from 'src/app/models/item.model';

@Component({
  selector: 'augen-card-detail',
  templateUrl: './card-detail.component.html',
  styleUrls: ['./card-detail.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CardDetailComponent implements OnInit {
  @Input() currentSelectedBook: ItemModel = {
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
  }
  constructor() { }

  ngOnInit(): void {
  }

}
