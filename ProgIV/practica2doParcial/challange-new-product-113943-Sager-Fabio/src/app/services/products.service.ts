import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../model/product';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  productsApi = 'http://localhost:3000/products';

  constructor(private http: HttpClient) {
  }

  getOneByName(name: string): Observable<Product[]> {
    return this.http.get<Product[]>(`${this.productsApi}?name=${name}`);
  }

  add(product: Product): Observable<Product> {
    return this.http.post<Product>(`${this.productsApi}/`, product);
  }
}
