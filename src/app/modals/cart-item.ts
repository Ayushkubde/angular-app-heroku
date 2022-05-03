import { Products } from "../modals/products";

export class CartItem {
    id:number;
    productId:number;
    productName:string;
    qty:number;
    price:number;

    constructor(id:number,product:Products,qty=1){
        console.log(product);
        
        this.id=id,
        this.productId=product.id,
        this.productName=product.name,
        this.qty=qty,
        this.price=product.price
    }
}
