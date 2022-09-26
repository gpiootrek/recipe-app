import { RecipesActions, FAV_ACTIONS } from './recipes.actions';

export interface RecipesState {
  favorites: string[];
}

const initialState: RecipesState = {
  favorites: [],
};

export function RecipesReducer(
  state: RecipesState = initialState,
  action: RecipesActions
): RecipesState {
  switch (action.type) {
    case FAV_ACTIONS.FETCH_FAVORITES:
      if (localStorage.getItem('saved')) {
        const fetchedState = {
          favorites: JSON.parse(localStorage.getItem('saved')!),
        };
        return fetchedState;
      } else {
        return state;
      }
    case FAV_ACTIONS.ADD_TO_FAVORITES:
      const newState = {
        favorites: [...state.favorites, action.payload],
      };
      return newState;
    case FAV_ACTIONS.REMOVE_FROM_FAVORITES:
      const updatedState = {
        favorites: state.favorites.filter((id) => id !== action.payload),
      };
      return updatedState;
    default:
      return state;
  }
}
