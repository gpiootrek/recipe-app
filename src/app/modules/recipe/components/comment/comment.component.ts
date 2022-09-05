import { Component, Input, OnInit } from '@angular/core';
import { Comment } from 'src/app/core/models/comment';

@Component({
  selector: 'recipe-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.scss'],
})
export class CommentComponent implements OnInit {
  @Input() comment!: Comment;

  ngOnInit(): void {}
}
