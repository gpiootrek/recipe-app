import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { FetchFavorites } from './core/store/recipes.actions';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'Recipe App';
  constructor(private store: Store) {}

  ngOnInit(): void {
    this.store.dispatch(new FetchFavorites());
  }
}
