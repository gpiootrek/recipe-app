import { UsersRecipeService } from 'src/app/core/services/users-recipe.service';
import { Component, OnInit } from '@angular/core';
import { Meal } from 'src/app/core/models/meal';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
})
export class RecipesComponent implements OnInit {
  meals$: Observable<Meal[]>;
  
  constructor(private usersRecipeService: UsersRecipeService) {
    this.meals$ = this.usersRecipeService.getRecipes();
  }

  ngOnInit(): void {}
}
