import { RouterModule } from '@angular/router';
import { CategoryViewComponent } from './components/category-view/category-view.component';
import { CategoriesComponent } from './categories.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CategoryCardComponent } from './components/category-card/category-card.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { CategoriesRoutingModule } from './categories-routing.module';
import { CategoryListComponent } from './components/category-list/category-list.component';

@NgModule({
  declarations: [
    CategoriesComponent,
    CategoryCardComponent,
    CategoryViewComponent,
    CategoryListComponent,
  ],
  imports: [CommonModule, RouterModule, SharedModule, CategoriesRoutingModule],
})
export class CategoriesModule {}
