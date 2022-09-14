import { Action } from '@ngrx/store';

export enum FAV_ACTIONS {
  FETCH_FAVORITES = '[Saved] Fetched Recipes',
  ADD_TO_FAVORITES = '[Saved] Added Recipe',
  REMOVE_FROM_FAVORITES = '[Saved] Removed Recipe',
}

export class FetchFavorites implements Action {
  readonly type = FAV_ACTIONS.FETCH_FAVORITES;
  constructor() {}
}

export class AddToFavorites implements Action {
  readonly type = FAV_ACTIONS.ADD_TO_FAVORITES;

  constructor(public payload: number) {}
}

export class RemoveFromFavorites implements Action {
  readonly type = FAV_ACTIONS.REMOVE_FROM_FAVORITES;

  constructor(public payload: number) {}
}

export type RecipesActions =
  | AddToFavorites
  | RemoveFromFavorites
  | FetchFavorites;
