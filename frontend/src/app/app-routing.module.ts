import { Component, NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
// Importando as views de Home e Product-Crud
import { HomeComponent } from "./views/home/home.component";
import { ProductCrudComponent } from "./views/product-crud/product-crud.component";
// Importando o componente de criação de produtos
import { ProductCreateComponent } from "./components/products/product-create/product-create.component";
// Importando o componente de atualização de produtos
import { ProductUpdateComponent } from "./components/products/product-update/product-update.component";
// Importando o componente de deletar produtos
import { ProductDeleteComponent } from "./components/products/product-delete/product-delete.component";

// Definição das rotas de navegação
const routes: Routes = [
  {
    path: "",
    component: HomeComponent,
  },
  {
    path: "products",
    component: ProductCrudComponent,
  },
  {
    path: "products/create",
    component: ProductCreateComponent,
  },
  {
    // Passando o id como parâmetro na url
    path: "products/update/:id",
    component: ProductUpdateComponent,
  },
  {
    path: "products/delete/:id",
    component: ProductDeleteComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
