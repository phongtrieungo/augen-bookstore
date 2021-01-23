import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';

import { map } from 'rxjs/operators';
import { ItemModel } from '../../models/item.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BookstoreService {
  endpointUrl = 'assets/endpoints.json';

  constructor(private http: HttpClient) { }

  searchBook(searchTerm: string): Observable<any> {
    const params = new HttpParams().set('q', searchTerm);
    return this.http.get('https://www.googleapis.com/books/v1/volumes', { params }).pipe(
      map((response: any) => {
        if (response?.totalItems > 0) {
          const results = (response.items || []).map((item: any) => ({
            id: item.id,
            authors: item.volumeInfo.authors,
            description: item.volumeInfo.description,
            title: item.volumeInfo.title,
            publishedDate: item.volumeInfo.publishedDate,
            shippingMethod: 'none',
            imageLinks: item.volumeInfo.imageLinks
          } as ItemModel));

          return results;
        }
      })
    );
  }

  private getEndpoints(): Observable<any> {
    return this.http.get(this.endpointUrl);
  }
}
