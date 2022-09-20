import { RecipesRoutingModule } from './recipes-routing.module';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RecipesComponent } from './recipes.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { RecipesListComponent } from './components/recipes-list/recipes-list.component';

@NgModule({
  declarations: [RecipesComponent, RecipesListComponent],
  imports: [
    CommonModule,
    RouterModule,
    SharedModule,
    RecipesRoutingModule,
  ],
})
export class RecipesModule {}
