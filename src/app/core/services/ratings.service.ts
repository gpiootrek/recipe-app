import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Injectable } from '@angular/core';
import { map, take } from 'rxjs';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root',
})
export class RatingsService {
  constructor(
    private afs: AngularFirestore,
    private authService: AuthService
  ) {}

  saveRating(rating: number, recipeId: number) {
    if (!rating) return;

    this.afs
      .collection('ratings')
      .valueChanges({ idField: 'id' })
      .pipe(
        take(1),
        map((docs: any) => {
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
