import { SummaryResolver } from '@angular/compiler';
import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-calcular',
  templateUrl: './calcular.component.html',
  styleUrls: ['./calcular.component.css'],
})
export class CalcularComponent {
  numeroA: number = 0;
  numeroB: number = 0;
  agregar() {
    console.log(this.numeroA);
    console.log(this.numeroB);
  }
  sumar() {
    const resultado = this.numeroA + this.numeroB;
    return this.resultado.emit(resultado);
  }
  restar() {
    const resultado = this.numeroA - this.numeroB;
    return this.resultado.emit(resultado);
  }
  multiplicar() {
    const resultado = this.numeroA * this.numeroB;
    return this.resultado.emit(resultado);
  }
  dividir() {
    const resultado = this.numeroA / this.numeroB;
    return this.resultado.emit(resultado);
  }
  @Output() resultado: EventEmitter<number> = new EventEmitter();
}
