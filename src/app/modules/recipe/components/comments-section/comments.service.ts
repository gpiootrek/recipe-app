import { NotificationsService } from 'src/app/core/services/notifications.service';
import { Injectable } from '@angular/core';
import {
  AngularFirestore,
  AngularFirestoreCollection,
} from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';
import { Comment } from 'src/app/core/models/comment';
import { AuthService } from 'src/app/core/services/auth.service';

@Injectable()
export class CommentsService {
  private commentsCollection: AngularFirestoreCollection<Comment>;
  constructor(
    private afs: AngularFirestore,
    private authService: AuthService,
    private notificationsService: NotificationsService
  ) {
    this.commentsCollection = afs.collection<Comment>('comments');
  }

  getComments(): Observable<Comment[]> {
    return this.commentsCollection.valueChanges();
  }

  addComment(recipeId: number, newComment: string) {
    if (newComment.trim().length === 0) return;
    if (!this.authService.isLoggedIn) {
      this.notificationsService.showNotification(
        'You have to log in to comment!'
      );
      return;
    }
    this.commentsCollection.add({
      user: this.authService.GetUserData(),
      text: newComment,
      date: new Date().getTime(),
      replies: [],
      likes: 0,
      recipeId: recipeId,
    });
  }
}
