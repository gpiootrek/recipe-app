import { RouterModule } from '@angular/router';
import { SharedModule } from 'src/app/shared/shared.module';
import { NgModule } from '@angular/core';
import { CommentsSectionComponent } from './components/comments-section/comments-section.component';
import { RecipeComponent } from './recipe.component';
import { CommonModule } from '@angular/common';
import { CommentComponent } from './components/comment/comment.component';
import { RecomendedComponent } from './components/recomended/recomended.component';
import { FormsModule } from '@angular/forms';
@NgModule({
  declarations: [
    RecipeComponent,
    CommentsSectionComponent,
    CommentComponent,
    RecomendedComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    FormsModule,
    RouterModule,
  ],
  exports: [RecipeComponent],
})
export class RecipeModule {}
