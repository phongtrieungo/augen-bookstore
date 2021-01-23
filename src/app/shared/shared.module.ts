import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchInputComponent } from './search-input/search-input.component';
import { FormsModule } from '@angular/forms';
import { CardListItemComponent } from './card-list-item/card-list-item.component';
import { CardDetailComponent } from './card-detail/card-detail.component';

const COMPONENTS = [
  SearchInputComponent,
  CardListItemComponent
];

@NgModule({
  declarations: [...COMPONENTS, CardDetailComponent],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [...COMPONENTS]
})
export class SharedModule { }