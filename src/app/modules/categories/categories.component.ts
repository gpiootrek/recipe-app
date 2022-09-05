import { Component, OnInit } from '@angular/core';
import { CategoryDetails } from 'src/app/core/models/category-details';
import { RecipeService } from 'src/app/core/services/recipe.service';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss'],
})
export class CategoriesComponent implements OnInit {
  categories!: CategoryDetails[];

  constructor(private recipeService: RecipeService) {}

  ngOnInit(): void {
    this.getCategories();
  }

  getCategories() {
    this.recipeService
      .getCategories()
      .subscribe((data) => (this.categories = data));
  }
}
