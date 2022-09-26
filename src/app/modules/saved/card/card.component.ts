import {
  ChangeDetectionStrategy,
  Component,
  Input,
  OnInit,
} from '@angular/core';
import { Observable } from 'rxjs';
import { Recipe } from 'src/app/core/models/recipe';
import { RecipeService } from 'src/app/core/services/recipe.service';

@Component({
  selector: 'saved-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CardComponent implements OnInit {
  recipe$!: Observable<Recipe>;
  @Input() id!: string;

  constructor(private recipeService: RecipeService) {}

  ngOnInit(): void {
    this.recipe$ = this.recipeService.getRecipeById(this.id);
  }
}
