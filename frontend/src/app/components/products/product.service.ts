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
}
