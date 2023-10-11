import { Injectable, NotFoundException } from "@nestjs/common";
import { Product } from "./product.model";

@Injectable()
export class ProductsService {
   private products: Product[] = [];

    insertProduct(title:string, desc: string, price:number){
        const prodId = Math.random().toString()
        const newProduct = new Product (prodId,title,desc, price)
        this.products.push(newProduct)
        return prodId
    }
    
    getProducts(){
        return [...this.products]
    }

    getSingleProduct(productId:string){
        const product = this.products.find(prod => prod.id === productId)
        if(!product){
         throw new NotFoundException('Could not find product')
        }
        return {...product}
    }

    updateProduct(productId: string, title: string, desc: string, price: number) {
        const productIndex = this.products.findIndex(prod => prod.id === productId);
     
        if (productIndex < 0) {
           throw new NotFoundException('Could not find product');
        }
     
        // If the product is found, update its properties
        const updatedProduct = { ...this.products[productIndex] }; // Create a copy of the product
        if(title){
            updatedProduct.title = title;
        }
        if(desc){
            updatedProduct.description = desc;
        }
        if(price){
            updatedProduct.price = price;
        }
     
        // Update the product in the original array
        this.products[productIndex] = updatedProduct;

        return "Product updated"
     }

     deleteProduct(productId: string){
        const productIndex = this.products.findIndex(prod => prod.id === productId);

        if (productIndex < 0) {
           throw new NotFoundException('Could not find product');
        }

        this.products.splice(productIndex, 1);
        return "Product deleted"
     }
     
}