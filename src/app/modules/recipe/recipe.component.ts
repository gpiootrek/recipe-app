import { RecipeService } from 'src/app/core/services/recipe.service';
import { Component, OnInit } from '@angular/core';
import { Recipe } from 'src/app/core/models/recipe';
import { ActivatedRoute, Params } from '@angular/router';
import { map, Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import {
  AddToFavorites,
  RemoveFromFavorites,
} from 'src/app/core/store/recipes.actions';
import { AppState } from 'src/app/core/store';

@Component({
  selector: 'app-recipe',
  templateUrl: './recipe.component.html',
  styleUrls: ['./recipe.component.scss'],
})
export class RecipeComponent implements OnInit {
  recipe!: Observable<Recipe>;
  id!: string;
  isFavorite$!: Observable<number>;
  helper!: Observable<number[]>;

  constructor(
    private recipeService: RecipeService,
    private route: ActivatedRoute,
    private store: Store<AppState>
  ) {
    this.route.params.subscribe((params: Params) => {
      this.id = params['id'];
      this.recipe = this.getRecipe();
      window.scrollTo(0, 0);
      this.isFavorite$ = this.store
        .select((state: any) => state.recipes)
        .pipe(
          map((recipes) =>
            recipes.favorites.findIndex((favId: string) => favId === this.id)
          )
        );
    });
  }

  ngOnInit(): void {}

  getRecipe(): Observable<Recipe> {
    return this.recipeService.getRecipeById(this.id);
  }

  addToFavorites() {
    this.store.dispatch(new AddToFavorites(this.id));
  }

  removeFromFavorites() {
    this.store.dispatch(new RemoveFromFavorites(this.id));
  }
}
