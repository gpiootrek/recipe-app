import { Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { RecipeService } from 'src/app/core/services/recipe.service';
import { Meal } from 'src/app/core/models/meal';

@Component({
  selector: 'home-main-recipe',
  templateUrl: './main-recipe.component.html',
  styleUrls: ['./main-recipe.component.scss'],
})
export class MainRecipeComponent implements OnInit {
  meal$!: Observable<Meal>;
  rating = Math.floor(Math.random() * 30 + 70);

  constructor(private recipeService: RecipeService) {}

  ngOnInit(): void {
    this.getRecipe();
  }

  getRecipe() {
    this.meal$ = this.recipeService.getRandomMeal();
  }
}
