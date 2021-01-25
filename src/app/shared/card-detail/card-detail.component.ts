import { Component, OnInit, ChangeDetectionStrategy, Input, Output, EventEmitter } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ItemModel } from 'src/app/models/item.model';
import { ShippingCost } from 'src/app/models/shipping-cost.model';

@Component({
  selector: 'augen-card-detail',
  templateUrl: './card-detail.component.html',
  styleUrls: ['./card-detail.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CardDetailComponent implements OnInit {
  @Input() currentSelectedBook: ItemModel = {
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
  };

  @Input() shippingCost: ShippingCost | any = {
    aircraft: 0,
    motobike: 0,
    train: 0
  };

  @Output() buyBookEmitter = new EventEmitter();

  bookDetailForm = this.fb.group({
    service: ['motorbike']
  });

  constructor(public fb: FormBuilder) { }

  ngOnInit(): void {
  }

  onBuyBook(): void {
    this.buyBookEmitter.emit({
      ...this.bookDetailForm.value,
      id: this.currentSelectedBook.id,
      shippingCost: this.shippingCost[`${this.bookDetailForm.value.service}`]
    });
  }

}
