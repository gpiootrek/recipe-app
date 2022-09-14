import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of, switchMap } from 'rxjs';
import {
  AddToFavorites,
  FAV_ACTIONS,
  RemoveFromFavorites,
} from './recipes.actions';

@Injectable()
export class RecipesEffects {
  addToFavs$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(FAV_ACTIONS.ADD_TO_FAVORITES),
        switchMap((data: AddToFavorites) => {
          if (localStorage.getItem('saved')) {
            const saved = JSON.parse(localStorage.getItem('saved')!);
            saved.push(data.payload);
            localStorage.setItem('saved', JSON.stringify(saved));
          } else {
            localStorage.setItem('saved', JSON.stringify([data.payload]));
          }
          return of(true);
        })
      ),
    { dispatch: false }
  );

  removeFromFavs$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(FAV_ACTIONS.REMOVE_FROM_FAVORITES),
        switchMap((data: RemoveFromFavorites) => {
          const saved = JSON.parse(localStorage.getItem('saved')!);
          const filteredSaved = saved.filter(
            (id: number) => id !== data.payload
          );
          localStorage.setItem('saved', JSON.stringify(filteredSaved));

          return of(true);
        })
      ),
    { dispatch: false }
  );

  constructor(private actions$: Actions) {}
}
