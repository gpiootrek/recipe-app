import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Observable } from 'rxjs';
import { Meal } from 'src/app/core/models/meal';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SearchComponent {
  meals$!: Observable<Meal[]>;

  getMeals(results$: Observable<Meal[]>) {
    this.meals$ = results$;
  }
}
