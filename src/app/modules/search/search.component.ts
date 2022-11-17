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

  // TODO: filtering logic (regarding that meal does not have whole information about recipe)
  constructor(route: ActivatedRoute) {
    route.queryParams.subscribe((params: Params) => {});
  }

  getMeals(results$: Observable<Meal[]>) {
    this.meals$ = results$;
  }
}
