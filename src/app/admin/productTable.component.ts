import { Component } from "@angular/core";
import { Product } from "../models/product.model";
import { ProductRepository } from "../models/product.repository";

@Component({
    templateUrl: "productTable.component.html"
})
export class ProductTableComponent {
   // searchText = '';

    constructor(private repository: ProductRepository) { }

    getProducts(): Product[] {
        return this.repository.getProducts();
    }

    deleteProduct(id: number) {
        this.repository.deleteProduct(id);
    }
}
