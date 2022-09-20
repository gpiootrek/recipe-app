import { RecipesAddRoutingModule } from './recipes-add.routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RecipesAddComponent } from './recipes-add.component';
import { NgModule } from '@angular/core';

@NgModule({
  declarations: [RecipesAddComponent],
  imports: [CommonModule, ReactiveFormsModule, RecipesAddRoutingModule],
})
export class RecipesAddModule {}
