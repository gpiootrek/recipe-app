import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeComponent } from './home.component';
import { MainRecipeComponent } from './components/main-recipe/main-recipe.component';
import { CategoryPreviewComponent } from './components/category-preview/category-preview.component';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [
    HomeComponent,
    MainRecipeComponent,
    CategoryPreviewComponent,
  ],
  imports: [CommonModule, RouterModule, SharedModule],
})
export class HomeModule {}
