import { Product } from "./../procuct.model";
import { ProductService } from "./../product.service";
import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";

@Component({
  selector: "app-product-create",
  templateUrl: "./product-create.component.html",
  styleUrls: ["./product-create.component.css"],
})
export class ProductCreateComponent implements OnInit {
  product: Product = {
    name: '',
    price: null
  };

  // Injetando um serviço através do construtor
  constructor(private productService: ProductService, private router: Router) {}

  ngOnInit(): void {}

  createProduct(): void {
    // O método subscribe notifica quando a resposta para o observable chegar
    this.productService.create(this.product).subscribe(() => {
		// Quando a resposta ocorrer, será exibido o SnackBar de confirmação e o usuário será redirecionado para a página de produtos	
      	this.productService.showMessage("Produto criado com sucesso !");
      	this.router.navigate(["/products"]);
    });
  }

  cancel(): void {
    this.router.navigate(["/products"]);
  }
}
