import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import { BookstoreRoutingModule } from './bookstore-routing.module';
import { BookstoreComponent } from './bookstore.component';
import { SharedModule } from '../shared/shared.module';
import * as fromBookstore from './reducer/bookstore.reducer';
import { BookstoreEffect } from './effects/bookstore.effect';
import { BookstoreListComponent } from './bookstore-list/bookstore-list.component';

@NgModule({
  declarations: [BookstoreComponent, BookstoreListComponent],
  imports: [
    CommonModule,
    BookstoreRoutingModule,
    SharedModule,
    HttpClientModule,
    StoreModule.forFeature(fromBookstore.bookstoreFeatureKey, fromBookstore.reducer),
    EffectsModule.forFeature([BookstoreEffect])
  ]
})
export class BookstoreModule { }
