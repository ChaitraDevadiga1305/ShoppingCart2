import { Pipe,PipeTransform } from "@angular/core";
import { CartProduct } from "../CartProduct";

@Pipe({
    name:'totalPrice'
})


export class TotalPricePipe implements PipeTransform{
    transform(items: CartProduct[]):number{
        return items.reduce((total,item) => total + item.price, 0)
    }
}