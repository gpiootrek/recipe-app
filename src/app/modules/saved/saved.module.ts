import { SavedRoutingModule } from './saved-routing.module';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { CardComponent } from './card/card.component';
import { SavedComponent } from './saved.component';

@NgModule({
  declarations: [SavedComponent, CardComponent],
  imports: [CommonModule, RouterModule, SavedRoutingModule],
})
export class SavedModule {}
