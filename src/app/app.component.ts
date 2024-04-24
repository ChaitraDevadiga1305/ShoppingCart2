import { Component } from '@angular/core';
import { ProductsService } from './services/products.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  providers:[ProductsService]
})
export class AppComponent {
  title = 'Shopping Cart';

  constructor(
    private _products:ProductsService
  ){}
}
