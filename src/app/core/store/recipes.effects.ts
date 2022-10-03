import { NotificationsService } from 'src/app/core/services/notifications.service';
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
  constructor(
    private actions$: Actions,
    private notificationsService: NotificationsService
  ) {}

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

          this.notificationsService.showNotification(
            `Added recipe with id ${data.payload} to favorites`
          );

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
            (id: string) => id !== data.payload
          );
          localStorage.setItem('saved', JSON.stringify(filteredSaved));

          this.notificationsService.showNotification(
            `Removed recipe with id ${data.payload} from favorites`
          );

          return of(true);
        })
      ),
    { dispatch: false }
  );
}
