import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Injectable } from '@angular/core';
import { map, Observable, take } from 'rxjs';
import { AuthService } from './auth.service';
import { Review } from '../models/review';

@Injectable({
  providedIn: 'root',
})
export class RatingsService {
  constructor(
    private afs: AngularFirestore,
    private authService: AuthService
  ) {}

  getRating(recipeId: number): Observable<number | undefined> {
    return this.afs
      .collection<Review>('ratings')
      .valueChanges()
      .pipe(
        map((data: Review[]) => {
          let rating;
          data.forEach((review: Review) => {
            if (
              review.user.uid === this.authService.GetUserData().uid &&
              review.recipeId === recipeId
            ) {
              rating = review.rating;
            }
          });
          return rating;
        })
      );
  }

  saveRating(rating: number, recipeId: number): void {
    if (!rating) return;

    this.afs
      .collection<any>('ratings')
      .valueChanges({ idField: 'id' })
      .pipe(
        take(1),
        map((docs: any[]) => {
          let id = null;
          docs.forEach((doc: any) => {
            if (
              doc.user.uid === this.authService.GetUserData().uid &&
              doc.recipeId === recipeId
            ) {
              id = doc.id;
            }
          });
          return id;
        })
      )
      .subscribe((docId: number | null) => {
        if (docId) {
          this.afs.doc(`ratings/${docId}`).update({ rating: rating });
        } else {
          this.afs.collection('ratings').add({
            user: this.authService.GetUserData(),
            rating,
            recipeId,
          });
        }
      });
  }
}
