import { Observable } from 'rxjs';
import { AuthService } from './../../../../core/services/auth.service';
import { ActivatedRoute, Params } from '@angular/router';
import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Comment } from 'src/app/core/models/comment';
import { RatingsService } from 'src/app/core/services/ratings.service';
import { CommentsService } from './comments.service';

@Component({
  selector: 'recipe-comments-section',
  templateUrl: './comments-section.component.html',
  styleUrls: ['./comments-section.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CommentsSectionComponent implements OnInit {
  comments$: Observable<Comment[]>;
  newComment: string = '';
  recipeId!: number;
  rating$!: Observable<number | undefined>;

  constructor(
    private route: ActivatedRoute,
    private ratingsService: RatingsService,
    private commentsService: CommentsService
  ) {
    this.comments$ = this.commentsService.getComments();

    this.route.params.subscribe((params: Params) => {
      this.recipeId = +params['id'];
    });

    this.rating$ = this.ratingsService.getRating(this.recipeId);
  }

  ngOnInit(): void {}

  onAddComment(): void {
    this.commentsService.addComment(this.recipeId, this.newComment);
  }

  onRatingSave(rating: number): void {
    this.ratingsService.saveRating(rating, this.recipeId);
  }

  identify = (index: number, item: Comment) => item;
}
