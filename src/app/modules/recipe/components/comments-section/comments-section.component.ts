import { Observable } from 'rxjs';
import { AuthService } from './../../../../core/services/auth.service';
import { ActivatedRoute, Params } from '@angular/router';
import {
  AngularFirestore,
  AngularFirestoreCollection,
} from '@angular/fire/compat/firestore';
import { Component, OnInit } from '@angular/core';
import { Comment } from 'src/app/core/models/comment';

@Component({
  selector: 'recipe-comments-section',
  templateUrl: './comments-section.component.html',
  styleUrls: ['./comments-section.component.scss'],
})
export class CommentsSectionComponent implements OnInit {
  private commentsCollection: AngularFirestoreCollection<Comment>;
  comments$: Observable<Comment[]>;
  newComment: string = '';
  recipeId!: number;

  constructor(
    private afs: AngularFirestore,
    private route: ActivatedRoute,
    private authService: AuthService
  ) {
    this.commentsCollection = afs.collection<Comment>('comments');
    this.comments$ = this.commentsCollection.valueChanges();
    this.route.params.subscribe((params: Params) => {
      this.recipeId = +params['id'];
    });
  }

  ngOnInit(): void {}

  onAddComment() {
    if (this.newComment.trim().length === 0) return;

    this.commentsCollection.add({
      user: this.authService.GetUserData(),
      text: this.newComment,
      date: new Date().getTime(),
      replies: [],
      likes: 0,
      recipeId: this.recipeId,
    });
    this.newComment = '';
  }
}
