import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { map, Observable } from 'rxjs';
import { AppState } from 'src/app/core/store';

@Component({
  selector: 'app-saved',
  templateUrl: './saved.component.html',
  styleUrls: ['./saved.component.scss'],
})
export class SavedComponent implements OnInit {
  favs$: Observable<string[]>;

  constructor(private store: Store<AppState>) {
    this.favs$ = store
      .select((state: any) => state.recipes)
      .pipe(map((recipes: any) => recipes.favorites));
  }

  ngOnInit(): void {
  }
}
