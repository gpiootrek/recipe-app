import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProfileComponent } from './modules/profile/profile.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'home' },
  { path: 'profile', component: ProfileComponent },
  {
    path: 'recipe',
    loadChildren: () =>
      import('./modules/recipe/recipe.module').then((m) => m.RecipeModule),
  },
  {
    path: 'categories',
    loadChildren: () =>
      import('./modules/categories/categories.module').then(
        (m) => m.CategoriesModule
      ),
  },
  {
    path: 'recipes',
    loadChildren: () =>
      import('./modules/recipes/recipes.module').then((m) => m.RecipesModule),
  },
  {
    path: 'saved',
    loadChildren: () =>
      import('./modules/saved/saved.module').then((m) => m.SavedModule),
  },
  {
    path: 'search',
    loadChildren: () =>
      import('./modules/search/search.module').then((m) => m.SearchModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
