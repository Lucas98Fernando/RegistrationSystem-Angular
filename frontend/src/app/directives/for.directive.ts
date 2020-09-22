import {
  Directive,
  OnInit,
  Input,
  ViewContainerRef,
  TemplateRef,
} from "@angular/core";

@Directive({
  selector: "[appFor]",
})
// Implementando o ciclo de vida de inicialização
export class ForDirective implements OnInit {
  // Pega tudo o que vem depois do In no arquivo do home.component
  @Input("appForIn") numbers: number[];
  // Criação de uma diretiva estrutural, que é capaz de alterar ou criar elementos dentro da DOM
  constructor(
    private container: ViewContainerRef,
    private template: TemplateRef<any>
  ) {}

  // Criando o método para inicializar o ciclo de vida
  ngOnInit(): void {
    for(let number of this.numbers) {
      this.container.createEmbeddedView(this.template, { $implicit : number })
    }
  }
}
