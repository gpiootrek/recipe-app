import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { CategoryDetails } from 'src/app/core/models/category-details';
import { RecipeService } from 'src/app/core/services/recipe.service';

@Component({
  selector: 'app-categories-list',
  templateUrl: './category-list.component.html',
  styleUrls: ['./category-list.component.scss'],
})
export class CategoryListComponent implements OnInit {
  categories$: Observable<CategoryDetails[]>;

  constructor(private recipeService: RecipeService) {
    this.categories$ = this.recipeService.getCategories();
  }

  ngOnInit(): void {}
}
