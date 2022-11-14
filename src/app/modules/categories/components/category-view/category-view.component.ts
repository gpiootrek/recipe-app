import { Meal } from 'src/app/core/models/meal';
import { Category } from 'src/app/core/models/category';
import { RecipeService } from 'src/app/core/services/recipe.service';
import { ActivatedRoute, Params } from '@angular/router';
import { Component } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'categories-category-view',
  templateUrl: './category-view.component.html',
  styleUrls: ['./category-view.component.scss'],
})
export class CategoryViewComponent {
  meals$: Observable<Meal[]>;
  category!: Category;

  constructor(
    private recipeService: RecipeService,
    private router: ActivatedRoute
  ) {
    this.router.params.subscribe((params: Params) => {
      this.category = params['name'];
    });
    this.meals$ = this.recipeService.getRecipesByCategory(this.category);
  }

}
