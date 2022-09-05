import { Recipe } from './../../../../core/models/recipe';
import { Component, OnInit } from '@angular/core';
import { RecipeService } from 'src/app/core/services/recipe.service';
import { Meal } from 'src/app/core/models/meal';

@Component({
  selector: 'home-main-recipe',
  templateUrl: './main-recipe.component.html',
  styleUrls: ['./main-recipe.component.scss'],
})
export class MainRecipeComponent implements OnInit {
  meal: Meal | undefined;
  rating = Math.floor(Math.random() * 30 + 70);

  constructor(private recipeService: RecipeService) {}

  ngOnInit(): void {
    this.getRecipe();
  }

  getRecipe() {
    this.recipeService.getRandomMeal().subscribe(
      (data) => this.meal = data);
  }
}
