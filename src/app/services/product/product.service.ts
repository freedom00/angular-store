import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {products} from '../../models/products';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http: HttpClient) {
  }

  getProductsByJson(): any {
    return this.http.get('assets/product.json');
  }

  getProductsByClass(): any {
    return products;
  }
}
