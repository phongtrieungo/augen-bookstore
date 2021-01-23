import { Component, OnInit, ChangeDetectionStrategy, Output, EventEmitter, Input, OnDestroy } from '@angular/core';
import { Subject, Subscription } from 'rxjs';
import { debounceTime, distinctUntilChanged } from 'rxjs/operators';

@Component({
  selector: 'augen-search-input',
  templateUrl: './search-input.component.html',
  styleUrls: ['./search-input.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SearchInputComponent implements OnInit, OnDestroy {
  @Input() hintText = '';
  @Output() searchTextEmitter = new EventEmitter<string>();

  searchText = '';
  modelChange = new Subject<string>();
  subscription: Subscription = new Subscription();

  constructor() { }

  ngOnInit(): void {
    this.subscription = this.modelChange.pipe(
      debounceTime(500),
      distinctUntilChanged()
    ).subscribe((searchTerm: string) => this.searchTextEmitter.emit(searchTerm));
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  onSearchChangeFn(text: any): void {
    this.modelChange.next(text);
  }

}
