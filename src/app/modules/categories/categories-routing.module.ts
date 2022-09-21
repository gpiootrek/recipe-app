import { CategoryViewComponent } from './components/category-view/category-view.component';
import { CategoriesComponent } from './categories.component';
import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { CategoryListComponent } from './components/category-list/category-list.component';

const routes: Routes = [
  {
    path: '',
    component: CategoriesComponent,
    children: [
      {
        path: '',
        redirectTo: 'list',
        pathMatch: 'full',
      },
      { path: 'list', component: CategoryListComponent },
      { path: ':name', component: CategoryViewComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CategoriesRoutingModule {}
