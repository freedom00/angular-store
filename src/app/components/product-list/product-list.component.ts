import {Component, OnInit} from '@angular/core';
import {ProductService} from '../../services/product/product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {
  products = this.productService.getProductsByClass();
  // products = this.productService.getProductsByJson();

  constructor(private productService: ProductService) {
  }

  ngOnInit(): void {
  }

  share(): void {
    window.alert('The product has been shared!');
  }

  onNotify(): void {
    window.alert('You will be notified when the product goes on sale');
  }
}
