import { ProductService } from './../product.service';
import { Product } from './../procuct.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-products-read',
  templateUrl: './products-read.component.html',
  styleUrls: ['./products-read.component.css']
})
export class ProductsReadComponent implements OnInit {

  products: Product[] 
  displayedColumns = ['id', 'name', 'price']

  // Injeção de dependência
  constructor(private productService: ProductService) { }

  // Método para inicializar o componente
  ngOnInit(): void {
    // Obtendo os produtos como resposta da requisição
    this.productService.read().subscribe(products => {
      this.products = products
      console.log(products)
    })
  }
}
