import { RecipesListComponent } from './components/recipes-list/recipes-list.component';
import { RecipesComponent } from './recipes.component';
import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

const routes: Routes = [
  {
    path: '',
    component: RecipesComponent,
    children: [
      {
        path: '',
        redirectTo: 'list',
        pathMatch: 'full',
      },
      {
        path: 'add',
        loadChildren: () =>
          import('./components/recipes-add/recipes-add.module').then(
            (m) => m.RecipesAddModule
          ),
      },
      {
        path: 'list',
        component: RecipesListComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RecipesRoutingModule {}
