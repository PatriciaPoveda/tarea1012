import { Component } from '@angular/core';

@Component({
  selector: 'app-principal',
  templateUrl: './principal.component.html',
})
export class PrincipalComponent {
  resultado: number = 0;
  pintarResultado(resultado: number) {
    this.resultado = resultado;
  }
}
