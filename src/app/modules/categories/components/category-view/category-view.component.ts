import { Meal } from 'src/app/core/models/meal';
import { Category } from '../../../../core/models/category';
import { RecipeService } from 'src/app/core/services/recipe.service';
import { ActivatedRoute, Params } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'categories-category-view',
  templateUrl: './category-view.component.html',
  styleUrls: ['./category-view.component.scss'],
})
export class CategoryViewComponent implements OnInit {
  meals!: Meal[];
  category!: Category;

  constructor(
    private recipeService: RecipeService,
    private router: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.router.params.subscribe((params: Params) => {
      this.category = params['name'];
    });
    this.getMeals();
  }

  getMeals() {
    this.recipeService
      .getRecipesByCategory(this.category)
      .subscribe((data) => (this.meals = data));
  }
}
