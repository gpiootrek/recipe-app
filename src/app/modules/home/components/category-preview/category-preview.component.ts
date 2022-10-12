import { Meal } from 'src/app/core/models/meal';
import { Category } from 'src/app/core/models/category';
import { RecipeService } from 'src/app/core/services/recipe.service';
import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'home-category-preview',
  templateUrl: './category-preview.component.html',
  styleUrls: ['./category-preview.component.scss'],
})
export class CategoryPreviewComponent implements OnInit {
  @Input() category!: Category;
  meals$!: Observable<Meal[]>;

  constructor(private recipeService: RecipeService) {}

  ngOnInit(): void {
    this.meals$ = this.recipeService.getRecipesByCategory(this.category, 4);
  }
}
