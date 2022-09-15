import { Meal } from 'src/app/core/models/meal';
import { Category } from './../../../../core/models/category';
import { RecipeService } from './../../../../core/services/recipe.service';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'home-category-preview',
  templateUrl: './category-preview.component.html',
  styleUrls: ['./category-preview.component.scss'],
})
export class CategoryPreviewComponent implements OnInit {
  @Input() category!: Category;
  meals: Meal[] = [];

  constructor(private recipeService: RecipeService) {}

  ngOnInit(): void {
    this.getRecipes();
  }

  getRecipes() {
    this.recipeService
      .getRecipesByCategory(this.category)
      .subscribe((data) => (this.meals = data.slice(0, 3)));
  }
}
