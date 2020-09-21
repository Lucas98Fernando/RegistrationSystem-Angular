import { Directive, ElementRef } from '@angular/core';

@Directive({
  // Seletor da diretiva
  selector: '[appRed]'
})
export class RedDirective {
  // Criando uma diretiva de atributo, esse tipo de diretiva é capaz de alterar a estilização ou o comportamento de um determinado componente 
  constructor(private el: ElementRef) {
    el.nativeElement.style.color = '#FF1515';
  }
}
