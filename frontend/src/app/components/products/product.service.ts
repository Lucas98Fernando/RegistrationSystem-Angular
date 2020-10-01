import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { MatSnackBar } from "@angular/material/snack-bar";
import { EMPTY, Observable } from "rxjs";
import { catchError, map } from 'rxjs/operators';
import { Product } from "./procuct.model";

@Injectable({
  // Esse service é um singleton, ou seja, é uma classe que possuí apenas uma instância
  providedIn: "root",
})
export class ProductService {
  // Utilizando a url gerada pelo json server
  baseUrl = "http://localhost:3001/products";

  // Injeção de dependência do SnackBar, que funciona de maneira semelhante ao "Toast"
  constructor(private snackBar: MatSnackBar, private http: HttpClient) { }

  // Configurações do SnackBar
  showMessage(msg: string, isError: boolean = false): void {
    this.snackBar.open(msg, "X", {
      duration: 3000,
      horizontalPosition: "right",
      verticalPosition: "top",
      panelClass: isError ? ['msg-error'] : ['msg-sucess']
    });
  }

  // Método para criação de produtos, utilizando o conceito de observable
  create(product: Product): Observable<Product> {
    return this.http.post<Product>(this.baseUrl, product).pipe(
      map((obj) => obj),
      catchError(e => this.errorHandler(e))
    );
  }

  // Método para ler os produtos cadastrados no back-end
  read(): Observable<Product[]> {
    return this.http.get<Product[]>(this.baseUrl).pipe(
      map((obj) => obj),
      catchError(e => this.errorHandler(e))
    );
  }

  // Método para editar um produto criado, passando como parâmetro um id
  readById(id: number): Observable<Product> {
    // Obtendo a url e o id atribuído ao produto selecionado, através da interpolação, ex: http://localhost:3001/product/1
    const url = `${this.baseUrl}/${id}`;
    return this.http.get<Product>(url).pipe(
      map((obj) => obj),
      catchError(e => this.errorHandler(e))
    );
  }

  // Método para atualizar os dados de um determinado produto
  update(product: Product): Observable<Product> {
    const url = `${this.baseUrl}/${product.id}`;
    // Realizando a atualização dos dados do produto
    return this.http.put<Product>(url, product).pipe(
      map((obj) => obj),
      catchError(e => this.errorHandler(e))
    );
  }

  // Método para remover produtos, através do id
  delete(id: number): Observable<Product> {
    const url = `${this.baseUrl}/${id}`;
    return this.http.delete<Product>(url).pipe(
      map((obj) => obj),
      catchError(e => this.errorHandler(e))
    );
  }

  // Pegando o erro para ser tratado
  errorHandler(e: any): Observable<any> {
    this.showMessage('Houve um erro inesperado.', true);
    // Retornando o observable vazio
    return EMPTY;
  }
}
