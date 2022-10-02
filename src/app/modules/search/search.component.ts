import { map } from 'rxjs/operators';
import { ActivatedRoute, Params } from '@angular/router';
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

  constructor(route: ActivatedRoute) {
    route.queryParams.subscribe((params: Params) => {
      console.log(params);
    });
  }

  getMeals(results$: Observable<Meal[]>) {
    // this.meals$ = results$.pipe(map((meals: Meal[]) => meals.filter((meal: Meal) => meal.)));
    this.meals$ = results$;
  }
}
