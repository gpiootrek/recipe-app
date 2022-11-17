import { Observable, BehaviorSubject } from 'rxjs';
import { AuthService } from './../../../../core/services/auth.service';
import { ActivatedRoute, Params } from '@angular/router';
import {
  AngularFirestore,
  AngularFirestoreCollection,
} from '@angular/fire/compat/firestore';
import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Comment } from 'src/app/core/models/comment';
import { RatingsService } from 'src/app/core/services/ratings.service';

@Component({
  selector: 'recipe-comments-section',
  templateUrl: './comments-section.component.html',
  styleUrls: ['./comments-section.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CommentsSectionComponent implements OnInit {
  private commentsCollection: AngularFirestoreCollection<Comment>;
  comments$: Observable<Comment[]>;
  newComment: string = '';
  recipeId!: number;
  rating$!: Observable<number | undefined>;

  constructor(
    private afs: AngularFirestore,
    private route: ActivatedRoute,
    private authService: AuthService,
    private ratingsService: RatingsService
  ) {
    this.commentsCollection = afs.collection<Comment>('comments');
    this.comments$ = this.commentsCollection.valueChanges();

    this.route.params.subscribe((params: Params) => {
      this.recipeId = +params['id'];
    });

    this.rating$ = this.ratingsService.getRating(this.recipeId);
  }

  ngOnInit(): void {}

  onAddComment(): void {
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

  onRatingSave(rating: number): void {
    this.ratingsService.saveRating(rating, this.recipeId);
  }
}
