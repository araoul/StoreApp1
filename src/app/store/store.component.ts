
import { ProductRepository } from '../models/product.repository';
import { Product } from '../models/product.model';
import { Component, OnInit, Input } from '@angular/core';
import { Cart } from '../models/cart.model';
import { Router } from '@angular/router';
//import { HeaderComponent } from '../header/header.component';


@Component({
  selector: 'app-store',
  templateUrl: './store.component.html',
  styleUrls: ['./store.component.scss']
})
export class StoreComponent implements OnInit {
  nomText='';
 // @Input('nom') public nomText:string;
 // table : HeaderComponent;
  public selectedCategory = null;
  public productsPerPage = 4;
public selectedPage = 1;
  constructor(private repository: ProductRepository, private cart: Cart,
    private router: Router)  { }

    

get products(): Product[] {
  let pageIndex = (this.selectedPage - 1) * this.productsPerPage
  return this.repository.getProducts(this.selectedCategory)
  .slice(pageIndex, pageIndex + this.productsPerPage);

}
get categories(): string[] {
return this.repository.getCategories();
}

changeCategory(newCategory?: string) {
  this.selectedCategory = newCategory;
}

changePage(newPage: number) {
  this.selectedPage = newPage;
  }
  changePageSize(newSize: number) {
  this.productsPerPage = Number(newSize);
  this.changePage(1);
  }

  get pageCount(): number {
    return Math.ceil(this.repository
    .getProducts(this.selectedCategory).length / this.productsPerPage)
    }
    
    addProductToCart(product: Product) {
      this.cart.addLine(product);
      this.router.navigateByUrl("/cart");
      }
 
  ngOnInit() {
  }

}
