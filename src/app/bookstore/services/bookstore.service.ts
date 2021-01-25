import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';

import { map } from 'rxjs/operators';
import { ItemModel } from '../../models/item.model';
import { Observable } from 'rxjs';
import { ShippingCost } from 'src/app/models/shipping-cost.model';

@Injectable({
  providedIn: 'root'
})
export class BookstoreService {

  constructor(private http: HttpClient) { }

  searchBook(searchTerm: string): Observable<any> {
    const params = new HttpParams().set('key', searchTerm);
    return this.http.get('http://localhost:8000/api/books', { params }).pipe(
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

  getShippingCost(): Observable<ShippingCost> {
    return this.http.get<ShippingCost>('http://localhost:8000/api/shippingCost');
  }

  buyBook(request: any): Observable<any> {
    return this.http.post('http://localhost:8000/api/buyBook', request);
  }
}
