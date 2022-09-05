import { RouterModule } from '@angular/router';
import { CategoryViewComponent } from './components/category-view/category-view.component';
import { CategoriesComponent } from './categories.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CategoryCardComponent } from './components/category-card/category-card.component';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [
    CategoriesComponent,
    CategoryCardComponent,
    CategoryViewComponent,
  ],
  imports: [CommonModule, RouterModule, SharedModule],
  exports: [CategoryViewComponent],
})
export class CategoriesModule {}
