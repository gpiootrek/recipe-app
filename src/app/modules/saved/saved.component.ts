import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { map, Observable } from 'rxjs';
import { AppState } from 'src/app/core/store';
import { FetchFavorites } from 'src/app/core/store/recipes.actions';

@Component({
  selector: 'app-saved',
  templateUrl: './saved.component.html',
  styleUrls: ['./saved.component.scss'],
})
export class SavedComponent implements OnInit {
  favs$: Observable<number[]>;
  constructor(private store: Store<AppState>) {
    this.favs$ = store
      .select((state: any) => state.recipes)
      .pipe(map((recipes: any) => recipes.favorites));
  }

  ngOnInit(): void {
  }
}
