import { AngularFirestore } from '@angular/fire/compat/firestore';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class UsersRecipeService {
  constructor(private http: HttpClient, private afs: AngularFirestore) {}

  getRecipes(): Observable<any[]> {
    return this.afs
      .collection('recipes')
      .valueChanges({ idField: 'id' })
      .pipe(
        map((data) => {
          return data.map((recipe: any) => {
            return {
              strMeal: recipe.name,
              strMealThumb:
                recipe.thumbUrl ||
                'https://icons-for-free.com/iconfiles/png/512/meal-1320568026248944827.png',
              idMeal: recipe.id,
            };
          });
        })
      );
  }

  getRecipe(id: string): Observable<any> {
    return this.afs.collection('recipes').doc(id).valueChanges();
  }

  getRecipeByName(name: string): Observable<any> {
    return this.afs.collection('recipes').valueChanges();
  }
}
