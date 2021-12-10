import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PrincipalComponent } from './principal.component';
import { CalcularComponent } from './calcular/calcular.component';
import { CalcularModule } from './calcular/calcular.module';
import { MostrarResultadoModule } from './mostrar-resultado/mostrar-resultado.module';

@NgModule({
  declarations: [PrincipalComponent],
  imports: [CommonModule, CalcularModule, MostrarResultadoModule],
  exports: [PrincipalComponent],
})
export class PrincipalModule {}
