import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../../services/products.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrl: './products.component.css',
  
})
export class ProductsComponent implements OnInit {

constructor(
  private _products: ProductsService,
){};

product:{id:number, name:string, description:string, 
  price:number, instock:string, image:string, addedToCart:boolean}[]=[];

ngOnInit(): void {
  this.product=this._products.products; 
}

OnAddToCart(product:{id:number, name:string, description:string, 
  price:number, instock:string, image:string,addedToCart:boolean}){
    this._products.OnAddToCart(product);
    product.addedToCart=true;

}


}
