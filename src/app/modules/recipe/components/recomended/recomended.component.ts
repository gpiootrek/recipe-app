import { Category } from './../../../../core/models/category';
import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { Meal } from 'src/app/core/models/meal';
import { RecipeService } from 'src/app/core/services/recipe.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'recipe-recomended',
  templateUrl: './recomended.component.html',
  styleUrls: ['./recomended.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class RecomendedComponent implements OnInit {
  meals$!: Observable<Meal[]>;
  @Input() category!: Category;

  constructor(private recipeService: RecipeService) {}

  ngOnInit(): void {
    this.meals$ = this.recipeService.getRecipesByCategory(this.category, 8);
  }
}
