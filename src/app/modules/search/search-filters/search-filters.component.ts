import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Router } from '@angular/router';
import { CATEGORIES } from 'src/app/core/constants/categories';
import { FilterTypes } from 'src/app/core/models/filter-types';
import { FiltersObject } from 'src/app/core/models/filters-object';

@Component({
  selector: 'search-filters',
  templateUrl: './search-filters.component.html',
  styleUrls: ['./search-filters.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SearchFiltersComponent {
  categories = CATEGORIES;
  filters: FiltersObject | null = {};

  constructor(private router: Router) {}

  applyFilter(filter: string, filterType: FilterTypes) {
    this.filters = {
      ...this.filters,
      [filterType]: filter,
    };
    this.router.navigate([], {
      queryParams: this.filters,
    });
  }
}
