import { HeaderData } from "./header-data.model";
import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class HeaderService {
  private _headerData = new BehaviorSubject<HeaderData>({
    title: "Início",
    icon: "home",
    routeUrl: "",
  });

  constructor() {}

  // Pegar a instância do header
  get headerData(): HeaderData {
    return this._headerData.value;
  }

  // Configurar os novos atributos do header
  set headerData(headerData: HeaderData) {
    this._headerData.next(headerData);
  }
}
