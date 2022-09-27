import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  OnInit,
  Output,
} from '@angular/core';
import {
  debounceTime,
  distinctUntilChanged,
  Observable,
  Subject,
  switchMap,
} from 'rxjs';
import { Meal } from 'src/app/core/models/meal';
import { RecipeService } from 'src/app/core/services/recipe.service';

@Component({
  selector: 'search-input',
  templateUrl: './search-input.component.html',
  styleUrls: ['./search-input.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SearchInputComponent implements OnInit {
  private searchInput = new Subject<string>();
  @Output() searchResults = new EventEmitter<Observable<Meal[]>>();

  constructor(private recipeService: RecipeService) {}

  ngOnInit(): void {
    this.searchResults.emit(
      this.searchInput.pipe(
        debounceTime(500),
        distinctUntilChanged(),
        switchMap((input: string) => this.recipeService.getRecipesByName(input))
      )
    );
  }

  search(input: string) {
    this.searchInput.next(input);
  }
}
