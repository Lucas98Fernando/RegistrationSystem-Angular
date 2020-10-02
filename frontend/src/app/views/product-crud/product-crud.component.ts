import { HeaderService } from "./../../components/template/header/header.service";
import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";

@Component({
  selector: "app-product-crud",
  templateUrl: "./product-crud.component.html",
  styleUrls: ["./product-crud.component.css"],
})
export class ProductCrudComponent implements OnInit {
  // Injetando uma dependência do tipo Router dentro do construtor, através do Angular
  constructor(private router: Router, private headerService: HeaderService) {
    headerService.headerData = {
      title: "Cadastro de produtos",
      icon: "store",
      routeUrl: "/products",
    };
  }

  ngOnInit(): void {}

  // Navegação para o componente de criação de produtos
  navigateToProductCreate(): void {
    this.router.navigate(["/products/create"]);
  }
}
