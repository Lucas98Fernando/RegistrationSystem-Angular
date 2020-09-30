import { Product } from "./../procuct.model";
import { ActivatedRoute, Router } from "@angular/router";
import { ProductService } from "./../product.service";
import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-product-update",
  templateUrl: "./product-update.component.html",
  styleUrls: ["./product-update.component.css"],
})
export class ProductUpdateComponent implements OnInit {
  product: Product;

  constructor(
    private productService: ProductService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get("id");
    // Realizando uma chamada para o service no momento da inicialização, recebendo o id através do método readById
    // Trazendo os dados gerais do produto, através do id, para preencher os inputs automaticamente
    this.productService.readById(id).subscribe((product) => {
      this.product = product;
    });
  }

  // Método para executar a ação de atualizar os dados relacionandoss ao produto
  updateProduct(): void {
    this.productService.update(this.product).subscribe(() => {
      // Atualizando o produto, exibido uma mensagem de confirmação e redirecionando o usuário para a tela de exibiçao de todos os produtos
      this.productService.showMessage("Produto alterado com sucesso !");
      this.router.navigate(["/products"]);
    });
  }

  cancel(): void {
    // Rota definida para retornar para a tela de exibição dos produto criados
    this.router.navigate(["/products"]);
  }
}
