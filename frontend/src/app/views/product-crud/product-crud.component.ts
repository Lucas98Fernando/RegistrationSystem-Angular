import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";

@Component({
  selector: "app-product-crud",
  templateUrl: "./product-crud.component.html",
  styleUrls: ["./product-crud.component.css"],
})
export class ProductCrudComponent implements OnInit {
  // Injetando uma dependência do tipo Router dentro do construtor, através do Angular
  constructor(private router: Router) {}

  ngOnInit(): void {}

  // Navegação para o componente de criação de produtos
  navigateToProductCreate(): void {
    this.router.navigate(["/products/create"]);
  }
}
