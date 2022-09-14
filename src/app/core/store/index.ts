import { ActionReducerMap } from '@ngrx/store';
import { RecipesReducer, RecipesState } from './recipes.reducer';


export const rootReducer = {};

export interface AppState {
    recipes: RecipesState;
  }
  
export const reducers: ActionReducerMap<AppState, any> = {
    recipes: RecipesReducer
};