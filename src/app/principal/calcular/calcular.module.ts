import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CalcularComponent } from './calcular.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [CalcularComponent],
  imports: [CommonModule, FormsModule],
  exports: [CalcularComponent],
})
export class CalcularModule {}
