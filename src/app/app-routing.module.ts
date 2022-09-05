import { CategoryViewComponent } from './modules/categories/components/category-view/category-view.component';
import { CategoriesComponent } from './modules/categories/categories.component';
import { RecipeComponent } from './modules/recipe/recipe.component';
import { HomeComponent } from './modules/home/home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProfileComponent } from './modules/profile/profile.component';
import { RecipesComponent } from './modules/recipes/recipes.component';
import { RecipesAddComponent } from './modules/recipes/components/recipes-add/recipes-add.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'home' },
  { path: 'home', component: HomeComponent },
  { path: 'recipe/:id', component: RecipeComponent },
  { path: 'categories', component: CategoriesComponent },
  { path: 'categories/:name', component: CategoryViewComponent },
  { path: 'profile', component: ProfileComponent },
  {
    path: 'recipes',
    component: RecipesComponent,
  },
  {
    path: 'recipes/add',
    component: RecipesAddComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
