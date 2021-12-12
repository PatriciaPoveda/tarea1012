import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-mostrar-resultado',
  templateUrl: './mostrar-resultado.component.html',
})
export class MostrarResultadoComponent {
  @Input() mostrarResuldado: number = 0;
}
