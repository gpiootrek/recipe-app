import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { CardComponent } from './card/card.component';
import { SavedComponent } from './saved.component';

@NgModule({
  declarations: [SavedComponent, CardComponent],
  imports: [CommonModule],
  exports: [SavedComponent],
})
export class SavedModule {}
