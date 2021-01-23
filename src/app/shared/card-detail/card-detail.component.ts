import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'augen-card-detail',
  templateUrl: './card-detail.component.html',
  styleUrls: ['./card-detail.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CardDetailComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
