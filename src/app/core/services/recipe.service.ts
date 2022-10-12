import { NotificationsService } from './notifications.service';
import { RECIPE_BY_NAME_URL } from './../constants/api-urls';
import { UsersRecipeService } from './users-recipe.service';
import { Recipe } from 'src/app/core/models/recipe';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, map, Observable, of } from 'rxjs';
import { Response } from '../models/response';
import { RecipeRes } from './../models/recipe-res';
import { CategoriesResponse } from '../models/categories-response';
import { Category } from '../models/category';
import { CategoryDetails } from '../models/category-details';
import { Meal } from '../models/meal';
import {
  RECIPE_URL,
  RANDOM_RECIPE_URL,
  RECIPES_BY_CATEGORY_URL,
  CATEGORIES_URL,
} from '../constants/api-urls';

@Injectable({
  providedIn: 'root',
})
export class RecipeService {
  constructor(
    private http: HttpClient,
    private usersRecipeService: UsersRecipeService,
    private notificationsService: NotificationsService
  ) {}

  getRecipesByCategory(
    category: Category,
    numOfRecipes?: number
  ): Observable<Meal[]> {
    return this.http
      .get<Response<Meal>>(`${RECIPES_BY_CATEGORY_URL}${category}`)
      .pipe(
        map((res: Response<Meal>) => {
          if (numOfRecipes) {
            return res.meals.slice(0, numOfRecipes);
          }
          return res.meals;
        })
      );
  }

  getCategories(): Observable<CategoryDetails[]> {
    return this.http
      .get<CategoriesResponse>(CATEGORIES_URL)
      .pipe(map((res: CategoriesResponse) => res.categories));
  }

  getRandomMeal(): Observable<Meal> {
    return this.http.get<Response<Meal>>(RANDOM_RECIPE_URL).pipe(
      map((res: Response<Meal>) => {
        return {
          strMeal: res.meals[0].strMeal,
          strMealThumb: res.meals[0].strMealThumb,
          idMeal: res.meals[0].idMeal,
        };
      })
    );
  }

  getRecipesByName(name: string): Observable<Meal[]> {
    return this.http
      .get<Response<RecipeRes[]>>(`${RECIPE_BY_NAME_URL}${name}`)
      .pipe(
        map((res: Response<RecipeRes[]>) => {
          return res.meals.map((meal: any) => {
            return {
              strMeal: meal.strMeal,
              strMealThumb: meal.strMealThumb,
              idMeal: meal.idMeal,
            };
          });
        }),
        catchError((error) => {
          this.notificationsService.showNotification(
            'No recipes with that name.'
          );
          return of([]);
        })
      );
  }

  getRecipeById(id: string): Observable<Recipe> {
    return this.http.get<Response<RecipeRes>>(`${RECIPE_URL}${id}`).pipe(
      map((res: Response<RecipeRes>) => {
        return {
          id: Number(res.meals[0].idMeal),
          name: res.meals[0].strMeal,
          category: res.meals[0].strCategory,
          ingredients: [
            [res.meals[0].strIngredient1, res.meals[0].strMeasure1],
            [res.meals[0].strIngredient2, res.meals[0].strMeasure2],
            [res.meals[0].strIngredient3, res.meals[0].strMeasure3],
            [res.meals[0].strIngredient4, res.meals[0].strMeasure4],
            [res.meals[0].strIngredient5, res.meals[0].strMeasure5],
            [res.meals[0].strIngredient6, res.meals[0].strMeasure6],
            [res.meals[0].strIngredient7, res.meals[0].strMeasure7],
            [res.meals[0].strIngredient8, res.meals[0].strMeasure8],
            [res.meals[0].strIngredient9, res.meals[0].strMeasure9],
            [res.meals[0].strIngredient10, res.meals[0].strMeasure10],
            [res.meals[0].strIngredient11, res.meals[0].strMeasure11],
            [res.meals[0].strIngredient12, res.meals[0].strMeasure12],
            [res.meals[0].strIngredient13, res.meals[0].strMeasure13],
            [res.meals[0].strIngredient14, res.meals[0].strMeasure14],
            [res.meals[0].strIngredient15, res.meals[0].strMeasure15],
            [res.meals[0].strIngredient16, res.meals[0].strMeasure16],
            [res.meals[0].strIngredient17, res.meals[0].strMeasure17],
            [res.meals[0].strIngredient18, res.meals[0].strMeasure18],
            [res.meals[0].strIngredient19, res.meals[0].strMeasure19],
            [res.meals[0].strIngredient20, res.meals[0].strMeasure20],
          ],
          youtubeUrl: res.meals[0].strYoutube,
          tags: res.meals[0].strTags?.split(','),
          thumbUrl: res.meals[0].strMealThumb,
          instructions: res.meals[0].strInstructions,
          area: res.meals[0].strArea,
          source: res.meals[0].strSource,
        };
      }),
      catchError(() => this.usersRecipeService.getRecipe(id))
    );
  }
}
