import { UsersRecipeService } from 'src/app/core/services/users-recipe.service';
import { Recipe } from './../../core/models/recipe';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Component, OnInit } from '@angular/core';
import { Meal } from 'src/app/core/models/meal';
import { map, Observable } from 'rxjs';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.scss'],
})
export class RecipesComponent implements OnInit {
  meals$: Observable<Meal[]>;
  
  constructor(private usersRecipeService: UsersRecipeService) {
    this.meals$ = this.usersRecipeService.getRecipes();
  }

  ngOnInit(): void {}
}
