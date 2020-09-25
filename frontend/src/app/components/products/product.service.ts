import { Injectable } from "@angular/core";
import { MatSnackBar } from "@angular/material/snack-bar";

@Injectable({
	// Esse service é um singleton, ou seja, é uma classe que possuí apenas uma instância
  providedIn: "root",
})
export class ProductService {
  // Injeção de dependência do SnackBar, que funciona de maneira semelhante ao "Toast"
  constructor(private snackBar: MatSnackBar) {}

  // Configurações do SnackBar
  showMessage(msg: string): void {
    this.snackBar.open(msg, "X", {
		duration: 3000,
		horizontalPosition: "right",
		verticalPosition: "top"
	});
  }
}
