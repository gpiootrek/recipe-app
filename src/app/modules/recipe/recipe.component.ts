import { RecipeService } from 'src/app/core/services/recipe.service';
import { Component, OnInit } from '@angular/core';
import { Recipe } from 'src/app/core/models/recipe';
import { ActivatedRoute, Params } from '@angular/router';
import { Observable } from 'rxjs';
import { UsersRecipeService } from 'src/app/core/services/users-recipe.service';

@Component({
  selector: 'app-recipe',
  templateUrl: './recipe.component.html',
  styleUrls: ['./recipe.component.scss'],
})
export class RecipeComponent implements OnInit {
  recipe!: Observable<Recipe>;
  id!: string;

  constructor(
    private recipeService: RecipeService,
    private route: ActivatedRoute,
    private useresRecipeService: UsersRecipeService
  ) {
    this.route.params.subscribe((params: Params) => {
      this.id = params['id'];
      this.recipe = this.getRecipe();
      window.scrollTo(0, 0);
    });
  }

  ngOnInit(): void {}

  getRecipe(): Observable<Recipe> {
    return this.recipeService.getRecipeById(this.id);
  }
}
