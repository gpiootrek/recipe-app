import { Category } from './../../../../core/models/category';
import { Component, Input, OnInit } from '@angular/core';
import { Meal } from 'src/app/core/models/meal';
import { RecipeService } from 'src/app/core/services/recipe.service';

@Component({
  selector: 'recipe-recomended',
  templateUrl: './recomended.component.html',
  styleUrls: ['./recomended.component.scss'],
})
export class RecomendedComponent implements OnInit {
  meals!: Meal[];
  @Input() category!: Category;

  constructor(private recipeService: RecipeService) {}

  ngOnInit(): void {
    this.getMeals();
  }

  getMeals() {
    this.recipeService
      .getRecipesByCategory(this.category)
      .subscribe((data) => (this.meals = data.slice(0, 8)));
  }
}
