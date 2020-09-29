import { HttpClient } from '@angular/common/http';
import { Injectable } from "@angular/core";
import { MatSnackBar } from "@angular/material/snack-bar";
import { Observable } from 'rxjs';
import { Product } from './procuct.model';

@Injectable({
	// Esse service é um singleton, ou seja, é uma classe que possuí apenas uma instância
  providedIn: "root",
})
export class ProductService {

	// Utilizando a url gerada pelo json server
	baseUrl = "http://localhost:3001/products";

  // Injeção de dependência do SnackBar, que funciona de maneira semelhante ao "Toast"
  constructor(private snackBar: MatSnackBar, private http: HttpClient) {}

  // Configurações do SnackBar
  showMessage(msg: string): void {
    this.snackBar.open(msg, "X", {
		duration: 3000,
		horizontalPosition: "right",
		verticalPosition: "top"
	});
  }

  // Método para criação de produtos, utilizando o conceito de observable
  create(product: Product): Observable<Product> {
	  return this.http.post<Product>(this.baseUrl, product)
  }

  // Método para ler os produtos cadastrados no back-end
  read(): Observable<Product[]> {
    return this.http.get<Product[]>(this.baseUrl)
  }

  // Método para editar um produto criado, passando como parâmetro um id
  readById(id: string): Observable<Product> {
    // Obtendo a url e o id atribuído ao produto selecionado, através da interpolação, ex: http://localhost:3001/product/1
    const url = `${this.baseUrl} / ${id}`
    return this.http.get<Product>(url)
  }

  // Método para atualizar os dados de um determinado produto
  update(product: Product): Observable<Product> {
    const url = `${this.baseUrl} / ${product.id}`
    // Realizando a atualização dos dados do produto
    return this.http.put<Product>(url, product)
  }
}
