import { Pipe, PipeTransform } from '@angular/core';

import { Product } from '../models/product.model';


@Pipe({ name: 'searchByName' })
export class SearchByNamePipe implements PipeTransform {

  transform(products:Product[] , searchText: string) {
    return products.filter(product => product.name.indexOf(searchText) > -1);
  }
}