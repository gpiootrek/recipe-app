import { Observable } from 'rxjs';
import { ActivatedRoute, Params } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Comment } from 'src/app/core/models/comment';
import { CommentsService } from './comments.service';

@Component({
  selector: 'recipe-comments-section',
  templateUrl: './comments-section.component.html',
  styleUrls: ['./comments-section.component.scss'],
})
export class CommentsSectionComponent implements OnInit {
  comments$: Observable<Comment[]>;
  newComment: string = '';
  recipeId!: number;

  constructor(
    private route: ActivatedRoute,
    private commentsService: CommentsService
  ) {
    this.comments$ = this.commentsService.getComments();
    this.route.params.subscribe((params: Params) => {
      this.recipeId = +params['id'];
    });
  }

  ngOnInit(): void {}

  onAddComment() {
    this.commentsService.addComment(this.recipeId, this.newComment);
    this.newComment = '';
  }

  identify = (index: number, item: Comment): number => index;
}
