import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardDirective } from './card.directive';

@NgModule({
  imports: [
    CommonModule
  ],
  exports: [CardDirective],
  declarations: [CardDirective]
})
export class SharedModule { }
